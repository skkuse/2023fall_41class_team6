const db = require("../db")
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const { exec } = require('child_process');
const { pid, cpuUsage, cwd, arch, memoryUsage, ppid } = require('node:process');
const os = require('os');

////////////////// 관련 식 정리 //////////////////
/*
carbonEmissions = carbonIntensity * (
	runTime * (
		(PUE_used * n_CPUcores * CPUpower * usageCPU_used) #powerNeeded_core(powerNeeded_CPU)
		+ ( PUE_used * (memory * data_dict.refValues_dict['memoryPower']) ) #powerNeeded_memory
	) * PSF_used / 1000
)
Carbonfootprint=energyneeded×carbonintensity
energy needed = runtime × (power draw for cores × usage + power draw for memory) × PUE ×PSF
carbonEmissions = energyNeeded * carbonIntensity
energyNeeded = runTime * powerNeeded * PSF_used / 1000
powerNeeded = powerNeeded_core + powerNeeded_memory
powerNeeded_core = powerNeeded_CPU + powerNeeded_GPU (GPU신경 X)
powerNeeded_CPU = PUE_used * n_CPUcores * CPUpower * usageCPU_used
powerNeeded_memory = PUE_used * (memory * data_dict.refValues_dict['memoryPower'])
*/

////////////////// .csv 파일 경로 //////////////////
/*
carbon intensity: data/v2.1/CI_aggregated.csv
PUE(Power Usage Effectiveness): data/v2.1/default_PUE.csv
PSF(Pragmatic Scaling Factor): blob/master/app.py#L399 --> default 1
*/


////////////////// declaring default values of variables //////////////////
let carbonIntensity = 0.0;
let PUE = 1.0;
let PSF = 1; // static
let runTime = 0;
// CPU 관련
let nCPUcores = 1;
let CPUpower = 12; // tdp per CPU core
let usageCPUUsed = 1.0;
// memory 관련
let memory = 64;
let memoryPower = 0.3725; // static (by referenceValues.csv)
// 기타
let countryName ='';
let provider = 'aws'; // AWS 환경일 경우, 'aws'인자로 넘기기

exports.get_carbon = async (req, res) => {
    try {
        let bodyData = req.body;
        let userCode = bodyData.code;
        let userName = bodyData.user;

        // 변수 값 설정
        setVariablesVal();

        // 정규 표현식을 사용하여 클래스 이름 자동 추출
        let classNameMatch = userCode.match(/public\s+class\s+([A-Za-z_][A-Za-z0-9_]*)/);
        if (!classNameMatch || classNameMatch.length < 2) {
            return res.status(400).json({ error: 'Failed to extract class name from Java code' });
        }
        // 추출한 클래스 이름
        let userClassName = classNameMatch[1];
        // .java 파일명 생성 및 파일 생성
        let javaFileName = `${userClassName}.java`;
        fs.writeFileSync(javaFileName, userCode);

        // start to record runTime
        const startTime = process.hrtime();

        // Compile the user's Java code
        exec(`javac ${javaFileName}`, (compileError, compileStdout, compileStderr) => {
            if (compileError) {
                console.error(`Compilation Error: ${compileError}`);
                return res.status(500).json({ error: 'Failed to compile Java code' });
            }

            // Execute the compiled Java code
            exec(`java ${userClassName}`, async (runError, runStdout, runStderr) => {
                if (runError) {
                    console.error(`Execution Error: ${runError}`);
                    return res.status(500).json({ error: 'Failed to execute Java code' });
                }

                // end to record runTime
                const endTime = process.hrtime(startTime);

                // 실행 시간 계산 (per millisecond)
                const executionTimeInMilliseconds = (endTime[0] * 1000 + endTime[1] / 1e6);
                // 실행 시간을 시간 단위로 환산 (per hour)
                const executionTimeInHours = (executionTimeInMilliseconds / 3600000);
                
                runTime = executionTimeInHours;

                let output = runStdout.trim();

                fs.unlinkSync(javaFileName);
                fs.unlinkSync(`${userClassName}.class`);

                // calculating carbonEmission
                let powerNeededCPU = PUE * nCPUcores * CPUpower * usageCPUUsed;
                let powerNeededMemory = PUE * memory * memoryPower;
                let powerNeeded = powerNeededCPU + powerNeededMemory;
                let energyNeeded = runTime * powerNeeded * PSF / 1000;
                let carbonEmission = energyNeeded * carbonIntensity;

                //TODO: carbonSample DB 값 불러오기
                let name = "자동차";
                let figure = "10";
                let description = "자동차와 비교했을 때의 탄소배출량";

                // inserting data into DB
                let sql = `
                    INSERT INTO team6.tb_carbon
                        (user_id, carbon_emission, code, core_num, cpu_power, cpu_usage, memory, memory_power, location, runtime, PUE, PSF, carbon_intensity, provider)
                    VALUES (
                        (SELECT id FROM team6.tb_user WHERE tb_user.name = "${userName}"),
                        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
                    );
                `;
                let sqlVal = [userName, carbonEmission, userCode, nCPUcores, CPUpower, usageCPUUsed, memory, memoryPower, countryName, runTime, PUE, PSF, carbonIntensity, provider];
                db.query(sql, sqlVal, function (err, result) {
                    if (err) {
                        console.log("query is not executed: " + err);
                        res.send("error");
                    } else {
                        res.status(200).send({ 
                            carbonEmission: carbonEmission,
                            executionServerInfo: {
                                nCPUcores: nCPUcores,
                                CPUpower: CPUpower,
                                usageCPUUsed: usageCPUUsed,
                                memory: memory,
                                memoryPower: memoryPower,
                                countryName: countryName,
                                runTime: runTime,
                                PUE: PUE,
                                PSF: PSF,
                                carbonIntensity: carbonIntensity,
                                provider: provider,
                            },
                            carbonSample: {
                                name: name,
                                figure: figure,
                                description: description,
                            },
                        });
                    }
                });
            });
        });        
    } catch (err) {
        console.log(err);
        res.send("error");
    }
};

exports.get_ranking = async (req, res) => {
    try {
        let sql = `
            SELECT tb_user.name, tb_carbon.carbon_emission
            FROM team6.tb_user
            INNER JOIN team6.tb_carbon
            ON tb_user.id = tb_carbon.user_id
            ORDER BY tb_carbon.carbon_emission ASC
            LIMIT 5;
        `;
        db.query(sql, function (err, result) {
            if (err) {
                console.log("query is not executed: " + err);
                res.send("error");
            } else {
                res.status(200).send(result);
            }
        });
    } catch (err) {
        console.log(err);
        res.send("error");
    }
};

async function setVariablesVal() {
    carbonIntensity = await getCarbonIntensityData();
    PUE = getPUE(provider); 
    nCPUcores = os.cpus().length;
    let cpuUsage = os.cpus().map(core => {
        let { user, sys, idle } = core.times;
        let total = user + sys + idle;
        let usage = (user + sys) / total;
        return usage;
      });
    let averageUsage = cpuUsage.reduce((acc, value) => acc + value, 0) / cpuUsage.length;
    usageCPUUsed = averageUsage;
    memory = os.totalmem()/(1024**3);
}

async function getCarbonIntensityData() {
    const filePath = path.join(__dirname, '../../data/CI_aggregated.csv');
    const carbonIntensityData = fs.readFileSync(filePath, 'utf8');
    const cILines = carbonIntensityData.split('\n').slice(1); // Skip the header

    const cI_dict_byLoc = {};
    const cI_dict_byName = {};

    cILines.forEach((line) => {
        let [location, continentName, countryName, regionName, carbonIntensity] = line.split(',');

        // Build cI_dict_byLoc
        cI_dict_byLoc[location] = {
            continentName,
            countryName,
            regionName,
            carbonIntensity,
        };

        // Build CI_dict_byName
        if (!cI_dict_byName[continentName]) {
            cI_dict_byName[continentName] = {};
        }
        if (!cI_dict_byName[continentName][countryName]) {
            cI_dict_byName[continentName][countryName] = {};
        }
        cI_dict_byName[continentName][countryName][regionName] = {
            location,
            carbonIntensity,
        };
    });

    const locationVar = await getCurLocation().then((res) => res);
    // Access carbonIntensity from CI_dict_byLoc
    const carbonIntensity = cI_dict_byLoc[locationVar].carbonIntensity;
    countryName = cI_dict_byLoc[locationVar].countryName;

    return Promise.resolve(carbonIntensity);
};

async function getCurLocation() {
    const locationInfo = await fetch(`https://api.ip.pe.kr/json/`);
    const locationData = await locationInfo.json();
    const countryCode = locationData.country_code;
    
    return countryCode;
};

function getPUE(provider='Unknown') {
    // 데이터 로드
    const filePath = path.join(__dirname, '../../data/defaults_PUE.csv');
    const pueContent = fs.readFileSync(filePath, 'utf8');
    const pueLines = pueContent.split('\n').slice(1); // 헤더 행 제외

    // 필요한 데이터 추출
    const pueDefault_dict = {};
    pueLines.forEach((line) => {
        const [provider, pue] = line.split(',');
        pueDefault_dict[provider] = parseFloat(pue);
    });

    return pueDefault_dict[provider];
};

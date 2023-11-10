const db = require("../db");
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
var ip = require("ip");
const { exec } = require('child_process');
const { use } = require(".");
const { pid, cpuUsage, cwd, arch, memoryUsage, ppid } = require('node:process');
const os = require('os');


// Carbonfootprint=energyneeded×carbonintensity
// energy needed = runtime × (power draw for cores × usage + power draw for memory) × PUE ×PSF

// # Power needed, in Watt
// powerNeeded_core = powerNeeded_CPU + powerNeeded_GPU
// powerNeeded_memory = PUE_used * (memory * data_dict.refValues_dict['memoryPower'])
// powerNeeded = powerNeeded_core + powerNeeded_memory

// # Energy needed, in kWh (so dividing by 1000 to convert to kW)
// energyNeeded_CPU = runTime * powerNeeded_CPU * PSF_used / 1000
// energyNeeded_GPU = runTime * powerNeeded_GPU * PSF_used / 1000
// energyNeeded_core = runTime * powerNeeded_core * PSF_used / 1000
// eneregyNeeded_memory = runTime * powerNeeded_memory * PSF_used / 1000
// energyNeeded = runTime * powerNeeded * PSF_used / 1000

// powerNeeded_CPU = PUE_used * n_CPUcores * CPUpower * usageCPU_used

// carbon intensity: data/v2.1/CI_aggregated.csv
// PUE(Power Usage Effectiveness): data/v2.1/default_PUE.csv
// PSF(Pragmatic Scaling Factor): blob/master/app.py#L399 --> default 1

let defaultValues = {
    runTime_hour: 12,
    runTime_min: 0,
    coreType: 'CPU',
    numberCPUs: 12,
    CPUmodel: 'Xeon E5-2683 v4',
    tdpCPU: 12,
    numberGPUs: 1,
    GPUmodel: 'NVIDIA Tesla V100',
    tdpGPU: 200,
    memory: 64,
    platformType: 'localServer',
    provider: 'gcp',
    usageCPUradio: 'No',
    usageCPU: 1.0,
    usageGPUradio: 'No',
    usageGPU: 1.0,
    PUEradio: 'No',
    PSFradio: 'No',
    PSF: 1,
};


exports.get_carbon = async (req, res) => {
    try {
        // let carbonIntensity = await getCarbonIntensityData();
        // let PUE = getPUE();
        // let PSF = 1;

        console.log("==================================\n");
        const numCores = os.cpus().length;
        const memory = os.totalmem();
        console.log(numCores);
        console.log(memory);
        console.log(pid);
        console.log(process.cpuUsage());
        console.log(`Current directory: ${cwd()}`);
        console.log(`This processor architecture is ${arch}`);
        console.log(memoryUsage());

        // console.log(req);
        console.log("==================================\n");
        // console.log(req.body);  
        let bodyData = req.body;
        let userCode = bodyData.code;
        // 정규 표현식을 사용하여 클래스 이름 추출
        const classNameMatch = userCode.match(/public\s+class\s+([A-Za-z_][A-Za-z0-9_]*)/);

        if (!classNameMatch || classNameMatch.length < 2) {
            return res.status(400).json({ error: 'Failed to extract class name from Java code' });
        }

        // 추출한 클래스 이름
        const userClassName = classNameMatch[1];

        // .java 파일명 생성
        const javaFileName = `${userClassName}.java`;



        // let escapedUserCode = JSON.parse(userCode); 
        let testPost = {
            "code": "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World\");\n    }\n}",
        };
        // res.status(200).send(JSON.stringify(testPost));
        
        // Save user code to a temporary Java file
        // fs.writeFileSync('UserJavaCode.java', `{"code": ${userCode}}`);
        // fs.writeFileSync('UserJavaCode.java', userCode);
        fs.writeFileSync(javaFileName, userCode);

        const startTime = process.hrtime();

        // Compile the user's Java code
        exec(`javac ${javaFileName}`, (compileError, compileStdout, compileStderr) => {
            if (compileError) {
                console.error(`Compilation Error: ${compileError}`);
                return res.status(500).json({ error: 'Failed to compile Java code' });
            }

            // Execute the compiled Java code
            exec(`java ${userClassName}`, (runError, runStdout, runStderr) => {
                if (runError) {
                    console.error(`Execution Error: ${runError}`);
                    return res.status(500).json({ error: 'Failed to execute Java code' });
                }

                // 종료 시간 기록
                const endTime = process.hrtime(startTime);
                // 실행 시간 계산 (밀리초 단위)
                const executionTimeInMilliseconds = (endTime[0] * 1000 + endTime[1] / 1e6);
                // 실행 시간을 시간 단위로 환산
                const executionTimeInHours = (executionTimeInMilliseconds / 3600000);
                let runTime = executionTimeInHours;


                console.log("mili  ", executionTimeInMilliseconds);
                console.log("hour   ",executionTimeInHours)

                // Parse and return the output
                console.log(runStdout);
                console.log(`Output: ${parseFloat(runStdout)}`);
                console.log(`Current directory: ${cwd()}`);
                console.log(pid);
                console.log(runStdout);
                console.log(memoryUsage());


                const output = runStdout.trim();
                res.json({ result: output});
            });
        });

        // res.status(200).send("test");
        
    } catch (err) {
        console.log(err);
        res.send("error");
    }
};

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
    
    console.log(`Carbon Intensity for ${locationVar}: ${carbonIntensity}`);    
    return Promise.resolve(carbonIntensity);
};

async function getCurLocation() {
    const locationInfo = await fetch(`https://api.ip.pe.kr/json/`);
    const locationData = await locationInfo.json();
    const countryCode = locationData.country_code;

    console.log(countryCode);
    
    return countryCode;
};

function getPUE() {
    let provider = process.env.PROVIDER;
    if (!provider)
        provider = 'Unknown';
    console.log("==================================\n");
    console.log(provider);

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

    console.log(pueDefault_dict);
    console.log(pueDefault_dict[provider]);
    
    return pueDefault_dict[provider];
};

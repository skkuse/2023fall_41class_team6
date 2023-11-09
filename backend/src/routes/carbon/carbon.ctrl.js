const db = require("../db");
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
var ip = require("ip");

// Carbonfootprint=energyneeded×carbonintensity
// energy needed = runtime × power draw for cores × usage + power draw for memory × PUE ×PSF

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
        let bodyData = req.body;
        // let userCode = bodyData.code;

        // let carbonIntensity = await getCarbonIntensityData();
        getPUE();
        
        res.status(200).send("test");
        
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

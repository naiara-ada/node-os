import os from 'node:os';

function getMemory(){        
    const memory = os.totalmem();
    return (memory/1048576).toFixed(2) + ' MB';
}

function getfreeMemory(){
   const freeMemo = os.freemem();
   // const freeMemo = os.platform(); win32
   return (freeMemo/1048576).toFixed(2) + ' MB';
}

function getType(){
    const type = os.type(); 
    return type;
}

function getVersion(){
    const version = os.version();
    return version
}


function getArchitecture(){
    const arch = os.arch();
    return arch;
}

function getCpu(){
    const cpu = os.cpus();
    return cpu[0].model;
}

function getPlatform(){
    const platform = os.platform();
    return platform;
}


export {getMemory, getArchitecture, getCpu, getfreeMemory, getVersion, getPlatform, getType};
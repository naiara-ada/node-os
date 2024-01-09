import os from 'node:os';

function getnetworks(){
    const networks = os.networkInterfaces();
    return networks
}

export {getnetworks}

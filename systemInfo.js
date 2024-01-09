import { get } from "node:https";
import { getMemory, getArchitecture, getCpu, getfreeMemory, getVersion, getPlatform, getType} from "./osModule.js";
import { getnetworks } from "./networkModule.js";


console.log('---osModule--')
console.log('Nombre: ', getCpu());
console.log('Tipo: ', getType());
console.log('Versión: ', getVersion());
console.log('Arquitectura: ', getArchitecture())
console.log('Memory: ', getMemory())
console.log('Memoria libre: ', getfreeMemory())
console.log('-------------')



const network = getnetworks();

for (const [key, value] of Object.entries(network)){
    console.log(`Interfaz ${key}:`)
    value.forEach((element) =>{
        console.log('| Familia: ', element.family)
        console.log('| Dirección: ', element.address)
        console.log('| Interno: ', element.internal)
    })
    console.log('--')
}


import { sumProduct } from "./mainModule.js";

console.log(sumProduct(3,4).product);
console.log(sumProduct(3,4).sum);

let module = 'mathUtil' //Could be decided during the runtime.
import(`./${module}.js`)
.then((mod)=>{console.log(mod.sum(3,4))})
.catch((err)=>{console.log(err)});
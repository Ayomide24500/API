const os = require("os")

console.log(os.homedir())
console.log(os.hostname())
let getadd = os.networkInterfaces()

// let x  = []
// for(let el in getadd){
//     x.push(getAdd[el])
// }
// console.log(x);

// console.log(x[1][1].address)
const myOwn = os.cpus()
const result =myOwn[0].model.split(" ")[2].split("-")[0].split("")[1]
console.log(result)


const myArch = os.arch()
console.log(myArch)

const total = os.totalmem()
const getGb =Math.floor(total /1000000000)
console.log(getGb)


if(result >= "3" && myArch ==="x64" && getGb>= 4){
    console.log("welcome to CodeLab")
}else{
    console.log("go and get a new laptop")
}
// const os = require('os');


// const networkInterfaces = os.networkInterfaces();

// for (const interfaceName in networkInterfaces) {
//   const addresses = networkInterfaces[interfaceName];
  
//   for (const address in addresses) {
//     if (address.family === 'IPv4') {
//        console.log(address.address);
//  }
// }
// }
// console.log(networkInterfaces)
/**classwork : write a condition that checks if a new intake's laptop matches the condition set by CodeLab
 * 
 * the laptop must have the following the:
 * A: model must be i3 and above
 * B: the laptop arch must be x64 and above
 * C : and the laptop must be 4 totalmem and above
 * 
 */
if(result === "3"){
    console.log("you are missing the word i")
}else if(result === "i"){
    console.log("you are missing the word 3")
}
if(myArch === "x"){
    console.log("you are missing the word 64")
}
else if(myArch === "64"){
    console.log("you are missing the word x")
}else if(getGb === 4){
    console.log("you are missing the word 6")
}else if(getGb === 6){
    console.log("you are missing the word 4")
}
/**classword: write a function that check if a new intake's lapatop matches the condition of set by codelab
 * 
 * the laptop must have the following the:
 * A: model must be 13 and above
 * B: the laptop arch must be x64 and above
 * C: the laptop must be 4 totalmem and above
 */

//  let laptop1 = {
//     model: 15,
//     arch: 64,
//     totalmem: 8
//   };
  
//   let laptop2 = {
//     model: 12,
//     arch: 32,
//     totalmem: 2
//   };

//  function checkLaptop(model, arch, totalmem) {
//    if (model >= 13 && arch >= 64 && totalmem >= 4) {
//      return true;
//    } else {
//      return false;
//    }
//  }
 
//  console.log(checkLaptop(laptop1.model, laptop1.arch, laptop1.totalmem)); 
//  console.log(checkLaptop(laptop2.model, laptop2.arch, laptop2.totalmem)); 

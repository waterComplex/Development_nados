// windows -> \\
// mac -> //
//to run a file that has a space in between use double quotes like node "abc def.js"
//because of these kind of conflicts we have path module 

let path = require("path");
let fs = require("fs");


// for(let i = 1; i<= 10 ;i++) {
//     let dirpathtomake = `lecture-${i}`; //${} whatever is in the curly braces will be treated as varibles
//     fs.mkdirSync(dirpathtomake);
//     fs.writeFileSync(path.join(dirpathtomake , "readme.md") ,`#####readme for ${dirpathtomake}`);
//     //path.join no need to add // or \\ it will automatically add according to machine
// }

//EXTENSION path.extname()
let ext = path.extname(path.join(__dirname, "abc.js"));//path ke end wale ka extension
console.log("extension is ", ext);
//path.basename()
let name = path.basename(__dirname);
console.log(name);
name = path.basename(path.join(__dirname,"check.txt")); //path ke end wale ka name
console.log(name);  
















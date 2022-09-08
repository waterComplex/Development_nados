//nodejs is like a phone which has some apps called modules 
//(1)fs (2)os (3)childprcess (4)path
//which we can access throw javascript

//node childprocess.js for running

let cp = require("child_process");
//getting that module in cp
//returns a object

console.log("trying to open calculator in laptop");
// console.log(cp);
//runs commands like we runs on terminal
// cp.execSync("open -a calculator");
console.log("opened calculator");

// cp.execSync("open -a 'Google Chrome'");
cp.execSync('open -a "Visual Studio Code"');//donno
// cp.execSync("open https://youtube.com");
// cp.execSync("open https://in.pinterest.com/");
// cp.execSync("open -a 'google chrome'");
// cp.execSync("open -a 'google chrome' https://youtube.com");


//can open another file 
let output = cp.execSync("node toopen.js");
console.log("to open 🌌 " + output); //used + sign to not to open in binary form OR to concatinate to string

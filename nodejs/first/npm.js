//like we download app from playstore in phone in
//nodejs we have npm(pakage manager) to get module from

//write     npm i chalk@4.1.2     in terminal below to get the chalk library
// npm uninstall chalk to uninstall
//   npm i figlet    also installed 

//chalk print different colour on command line
//logic in language features from modules

//see from the site how to use its features
let chalk = require("chalk");//
let figlet = require("figlet");
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.green('Hello world!'));
// console.log(chalk.bgGreenBright('Hello world!'));
// console.log(chalk.red.bold('Hello world!'));
// console.log(chalk.underline.blue('Hello world!'));
// console.log(figlet.textSync("dream")); //print big on terminal below
console.log(chalk.bgBlueBright(figlet.textSync("dream")));







//FILESYSTEM
//FILE -> CREAT,            READ,           UPDATE,         DELETE
//        open -w,        readfileSync      appendfile      unlinkSync
//      writefileSync

let fs = require("fs");

//READ
//let buffer = fs.readFileSync("toopen.js"); //give whole content in (buffer form)
// return in binary form, unless we are using is somewhere we may conver to required form
// console.log("binary date", buffer); //in binary
// console.log("concatinating to a string  "+ buffer); //converted to strings 

//CREAT 
//fs.openSync("check.txt","w"); //creat txt file in writing mode

//creat / write
//fs.writeFileSync("check.txt "," are we really happy today ");
//if no_file ->creat and if file exist than REPLACE  the content

//creat / write
// fs.appendFileSync("check.txt "," if not then why not ");
//if no_file ->creat and if file exist than APPEND the content


//MAKING DIRECTORY/folder
//  CREAT,       READ,        DELETE
//  mkdirSync   readdirSync     rmdirSync

// fs.mkdirSync("a_directory");

//fs.writeFileSync("a_directory/a_file.txt","writing in the file which i just created now ");
//made a file in the directory wrote in it


//deleting folder/directory
//first deleting files in it then deleting the folder/directory
// let content = fs.readdirSync("a_directory");//gives the names(array) of the files in that folder 
// console.log(content);
// for(let i = 0 ; i<content.length;i++){
//     fs.unlinkSync("a_directory/" + content[i]);
//     //remove file
//     console.log("deleted file " , content[i]);
// }
//remove folder
// fs.rmdirSync("a_directory")



// //fs.existsSync() -> if the file or a directory exist at the given path or not   True / False

console.log("#######");
let doespathexist = fs.existsSync("check.txt");
console.log(doespathexist);
doespathexist = fs.existsSync("checker.txt");
console.log(doespathexist);
console.log(__dirname);
//fs.lstatSync() ->tells given path is of file or directory
let detailsObj = fs.lstatSync(__dirname +"/filesystem.js"); // __dirname is global keyword tell in which folder you are working

let ans = detailsObj.isFile();
console.log(ans);
ans = detailsObj.isDirectory();
console.log(ans);
 
// /Users/rohit/Documents/programming/devlopment_NADOS/nodejs/first/check.txt 




//make directory which has there own file lecturewise
// for(let i = 1; i<= 10 ;i++) {
//     let dirpathtomake = `lecture-${i}`; //${} whatever is in the curly braces will be treated as varibles
//     fs.mkdirSync(dirpathtomake);
//     fs.writeFileSync(dirpathtomake + "\\" + "readme.md" ,`#####readme for ${dirpathtomake}`);
//     // windows -> \\
//     // mac -> //
//     //rather use path module
// }












let singlequotedstring = 'this is a single quoted string';
let doublequotedstring = "this is a double quoted string";

console.log(singlequotedstring);
console.log(doublequotedstring);

let char = singlequotedstring.charAt(4); //return charcter at 4th index
                                        //which is also treated as a string
let ascii = singlequotedstring.charCodeAt(4);//returns ascii value
let sbstr = singlequotedstring.substring(3,9)//return from start to end-1
console.log(char);
console.log(ascii);
console.log(sbstr);

//this also has contains function     


//imp

let aostr = singlequotedstring.split("i")//spliting on the bases of i(could be anything) 
// and returns array of string 
console.log(aostr);
let aostr1 = singlequotedstring.split("");//splits every character

let string = aostr.join("8");//join the splited array and 8 between them and 
console.log(string);//returns a single string

let s = "    trim initial and final spaces     " ;
let as = s.trim(); //removes initial and final spaces
console.log(as);


let greet = "How are you";
console.log(greet);
let sg = greet.split(" ");
console.log(sg);
let jg = sg.join("+");
console.log(jg);



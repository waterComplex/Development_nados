// //to print a line
// console.log("is this a line to be printed");
// //declare a variable
// let a ;
// //JS only tells that it is a varible not its type
// //initially undefined
// console.log(a);
// a = 10;
// console.log(a);
// console.log("variable contains a number",a);
// a = "hell a string ";
// console.log(a);
// a = "hellp string";
// console.log(a);
// a = true;
// console.log(a);
// a= null;
// console.log(a);
// //Data type : (1) Primitive data types - numbers, string, boolean, null,symbols

// // JS is similar to java, c++, c

// //printing numbers 1 to 10
// let number = 10;
// for (let i =1 ; i <= number ; i++){
//     console.log("number is ", i);
// }

// //is prime  
// let num = 16 ;
// let flag = true ; 
// for (let i = 2; i< num;i++)  {
//     if ( num % i == 0){
//         flag = false ;
//         break;
//     }
// }
// if (flag == true ){
//     console.log(num,"is prime");
// }else{
//     console.log(num, "is not prime");
// }


// //practice 

// //print fizzbuzz

// let n =20;
// for (let i=1 ;i <= n ;i++){
//     if (i % 3 == 0 && i % 5 == 0 ){
//         console.log("fizzbuzz");
//     }else if(i % 3 == 0 ){
//         console.log("fizz");
//     }else if (i % 5== 0){
//         console.log("buzz");
//     }else{
//         console.log(i);
//     }
// }

let lo = 4;
let hi = 69;

let flag = true;
console.log(lo, hi);

for (let i = lo ; i <= hi ;i++ ){
    for(let j = 2 ;j < i ;j++){
        if (i %j == 0){
            flag = false;
            break;
        }
    }
    if (flag == true ){
        console.log(i);
    }
    flag = true;
}
let c = 0 ;
let a = 6758;
while (a > 1){           //here 675.8 is not equal to 675
    a /= 10;
    c++;
}

console.log(c);








//array declare
// let arr = [];

let array = [2,4,4,5,7,8 ];
console.log(array); //directly print array in[]

// let i = 0;

// while(i < array.length){ //array.length
//     console.log("element at index " ,i," is ",array[i]);
//     i++
// }

//.push() -> to add at the end
//.unshift() -> to add at the begining
array.push("at the end"); //you can add anything string ,number etc
array.unshift("at the begining");
console.log("************************");
console.log(array);
//similarly .pop()for removing from end and .shift() for removing from begining
array.pop();
array.shift();
console.log("************************");
console.log(array);

//.slice() =>  takes starting index and ending index and returns the part of array from 
//starting to end-1
//original array remains same 
//if ending is not giving then from starting till end
let part = array.slice(2,5);
console.log("************************");
console.log(part);
console.log(array);

//array.splice(3,2);//(index,length) DELETE part of original

//index2f - return the index of what you are searching 
//contain - check if it contain the element

console.log(array.indexOf(5));
console.log(array.Contain(5));


// sum of two array in javascript
// just see
// function sumArray(a, b) {
// var c = [];
// for (var i = 0; i < Math. max(a. length, b. length); i++) {
// c. push((a[i] || 0) + (b[i] || 0));
// }
// return c;
// }
















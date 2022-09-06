//non-primitive type =>arrray, function, objects;

//FUNCTION

//no return types,no parameters types
//fun def
function say_hi (parameter) {
    //console.log("helll from sayhi");
    //console.log("parameter is " ,parameter)
    return "this is going to be returned";
}
//funcall
say_hi();
say_hi(1232);
say_hi("hekkkk");
say_hi([1,2,4,5,6,6]); //passing array    //prints [ 1, 2, 4, 5, 6, 6 ]
let rval = say_hi(); 
let r1val = say_hi([1,2,4,5,6,6]); //same as above
console.log(rval, r1val, "rval and r1val");

function func(){
    let val = Math.random() > 0.5 ? true :"value is less than 0.5"; //Math.random generates 
                                        //random value between 0 and 1 
    return val;             //diff types of val is being returned
}
let val = func();
console.log(val);
// //OBJECT -> GROUP OF KEY : VALUE PAIR 

// //declaration
// //let obj = {}; //just curly-braces

// //KEY : VALUE -> property
// //KEY : FUNCTION -> method

// let thoru = {
//     name : "odin putr ",       // KEY : VALUE pair seperated by ,
//     lastname : "thoru",
//     address : {                 //address also a object (key : value pair also in a object)
//         city : "vakanda ",
//         state : "sgurad",
//     },
//     age : 500,
//     is_avenger : true,
//     movies : ["thor","thor ragnarok", "infinity war","endu game"],
//     say_hi : function(){
//         console.log("thor says vkanda forever");
//     }
// };
// //GET
// // console.log(thoru.name);
// // console.log(thoru.age);
// // console.log(thoru.address.state);
// // console.log(thoru.movies[2]);
// // thoru.say_hi();

// // SET/UPDATE
// // console.log("thor : ", thoru);   //prints all things in curly bracket a it is
// // thoru.age = 501;
// // thoru.friends = ["groot", "peter", "strak","steve"];
// // thoru.is_avenger = false;
// // console.log("thor : ", thoru);

// //DELETE
// //delete thoru.address;
// console.log("thor : ", thoru);

// //loop
// for(let key in thoru){      //print every key : value pair one by one 
//     console.log(key," : ",thoru[key]);
// }

// for(let k  in thoru){      //same things 
//     console.log(k," : ",thoru[k]);
// }

//IMP
// //difference in dot and sq bracket you should know
// let propkey = "age";
// console.log(thoru[propkey]); //with square bracket it replace propkey with what is in 
// console.log(thoru["age"]);//propkey and then search it in thoru
// console.log(thoru.age);//with dot it directly search for age(whatever is written)
// //all three lines are same and above loops are also running similarly




// console.log(thoru.xyz);     //undefined





// QUESTION 1
//added an album pink season (object)
// const myMusic = [                //((((myMusic is an array containing objects))))
//     {"artist" : "pink guy",
//               "title" : "pink seasons",
//               "release_year" : 2017,
//               "formats" : [
//                 "CD",
//                 "mp4",
//                 "mp3"
//               ]
//     },
//     {
//       "artist": "Billy Joel",
//       "title": "Piano Man",
//       "release_year": 1973,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//       "gold": true
//     }
//   ];

//Question 2

// Setup
// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];
  
//   function lookUpProfile(name, prop) {
//     // Only change code below this line
        
//         for( let i = 0 ;i < contacts.length ; i++){     //.length for length of array
//           if(contacts[i].firstName === name){           //===checking equality
//               return contacts[i][prop] || "No such property";//return propety if exist else return "No such contacts"
//           }
//         }
//           return "No such contact"
//     // Only change code above this line
//   }
  
//   lookUpProfile("Akira", "likes");

//QUESTION 3
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(prop !== "tracks" && value.length  !== 0){
    records[id][prop] = value;//using [] because id or prop is not key what is in it is the key
  }else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false){ //.hasOwnProperty("") to check 
      records[id][prop] = [value];
  }else if (prop === "tracks" && value !== "" ){
      records[id][prop].push(value);
  }else if(value === ""){
    delete records[id][prop];
  }
  return records;
}


updateRecords(recordCollection, 5439, 'artist', 'ABBA');
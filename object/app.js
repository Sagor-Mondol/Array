/*
var myInfo = [ 'Sagor Mondol', '21', 'Student', 'Madaripur - Dhaka Bangladesh']; // Array Use 

for (var a = 0; a < myInfo.length; a++){
    console.log('My Info ', myInfo[a]);
};

var write = myInfo[3];
console.log(write);
*/

// Objects 

var myInf = {
    name: 'Sagor Mondol',
    age: 21,
    job: 'Student',
    From : 'Madaripur Dhaka Bangladesh'
}

console.log(myInf);
console.log(myInf.job);


function functionName () {
    console.log('Hello World');
}


functionName();


var objectArry = {
    name:['Sagor Mondol', 'Mondol Sagor', 'Zaddi Baba'],
    age : [10, 20, 50, 40, 21, 78, 88]
}

console.log(objectArry.name[1]);
console.log(objectArry.age[4]);
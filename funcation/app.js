
var x = 2;
var Y = 3;
var d = x + Y;
console.log(d); // var Use 

// Function - Learningh

function myInfo () {
  console.log('Hello World');
}
myInfo();


function functionName (a, b){
  var outPut = a + b ;
  console.log(outPut);
}
functionName(10, 2); // Function Use 

// ফাংশনকে আরেক ফাংশনের আর্গুমেন্ট হিসেবে পাস করতে পারবো

function myInfoName ( name, callback){
   var myAge = 21;
   callback(myAge);
   console.log('Is It INteresting ? Yes it is Mr.' + name);
}

function hello (age){
  console.log('I am passed Throough')
}

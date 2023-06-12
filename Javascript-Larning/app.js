// Array

// Normarl
var name1 = 'Sagor Mondol';
var name2 = 'Mondol Sagor';
var name3 = 'Sagor';
var name4 = 'Mondol';
var name5 = 'Zaddi Baba';

console.log(name1);

// Array 

var allName = ['Sagor Mondol', 'Mondol Sagor', 'Sagor', 'Mondol', 'Zaddi Baba'];
console.log(allName);

allName[2]='Abir Sina'; // chang name
console.log(allName[1]) // index number accuces
console.log(allName.length);

for (var i = 0; i < allName.length; i++){ // loop use 
    console.log('My Name is ' + allName[i]);
}

// Variables and Data Types

var firstName = 'Naruto';
console.log(firstName);
// output: Naruto

var lastName = 'Uzumaki';
var  age = 16;

var fullAge = true;
console.log(fullAge);
// output: true

var job;
console.log(job)
// output: Undefined

job - 'Teacher';
console.log(job)
// output: job

var 3years = 3;
// not valid
//fixed version
var _3years = 3;
var $3years = 3;
// output =  
var john/mark = 'Naruto and Sasuke';
// error
//fixed version
var narutoSasuke = 'Naruto and Sasuke';
// never use javascript key words as variable names

/****************************************************************************/

// Variable mutation and type coersion

var firstName = 'Naruto';
var age = 16;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age ' year old ' + job + '. Is He Married?' + isMarried );

// Variable mutation: changing variables
age = 'sixteen';
job = 'driver';

alert(firstName + ' is a ' + age ' year old ' + job + '. Is He Married?' + isMarried );

var lastName = prompt('What is his last nam')
console.log(firstName + ' ' + lastName);

/****************************************************************************/

// Basic Operators

var year, yearNaruto, yearSasuke;
now = 2023;
yearNaruto = now - 16;
yearSasuke = now - 17;

// Math Operators
yearNaruto = now - ageNaruto;
yearSasuke = now - ageSasuke'

console.log(yearJohn);

console.log(now * 2);
console.log(now + 2);
console.log(now / 10);

//Logical operators

var narutoOlder = ageNaruto > ageSasuke;
console,log(narutoOlder);

// Type of operator
console.log(typeof narutoOlder);
console.log(typeof ageNaruto);
console.log(typeof 'Sasuke is older than Naruto');
var x;
console.log(typeof x);

/******************************************************************************/

// Operator precendence

var now = 2023;
var yearNaruto = ...;
var fullAge = 16;

var is fullAge = now - yearNaruto >= fullAge;
"use strict"; //treat all JS code as newer version
/*+++++++++++++++++++++++++++ datatypes ++++++++++++++++++++++++++
JavaScript is a dynamically typed language, which means that data types of variables are
determined by the value they hold at runtime and can change throughout the program 
as we assign different values to them.

1.primitive type
2.non primitive /reference type
accoring to how we store them and access them

1. Primitive data type: call by value , orignal value remain same ,we get copy of orignal and we make changes on that
7 type : string, Number, Boolean, Null, Undefined, BigInt, Symbol

2. Non-Primitive data type: call by reference, orignal value changed, we get orignal and we make changes on that
3 type : Array, Objects, Functions

*/

/*
number => 2 to power 53
bigInt
string => ""
boolean => true/false
null => standalone value
undefined =>
symbol=>unique
object
*/

let name = "Gauri"
let age = 23
let isLoggedIn = false
let outSideTemp = null
let city;
let id = Symbol("123")
let anId = Symbol("123")
let bigNumber = 123364329n



console.log(typeof "Gauri");
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof null);  //object
console.log(typeof undefined);  //undefined
console.log(typeof name);
console.log(typeof city);
console.log(typeof id);
console.log(typeof anId);
console.log(typeof outSideTemp);
console.log(typeof bigNumber);
console.log(id === anId);


const flowers = ["Rose", "Lotus", "Jui"] ;  //Array

let myInfo = 
{
    name:"Gauri",
    age:23,
    city:"Devgad"
}  ;                               //Object

const myfunction = function(){
    console.log("Hello World");
}                                 //function

console.log(typeof flowers);
console.log(typeof myInfo);
console.log(typeof myfunction);

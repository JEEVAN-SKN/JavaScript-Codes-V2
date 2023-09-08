

// the above code lines(literally no code ) is the shortest program in js
// if we run an empty code in js browser console there is still lot runnin gin background

//Js engine creates an execution context and its respective call stack for every execution (even empty code)
// js engine always creates a global object ("window" in case of chrome) and a "this" keyword for an execution even if it is empty code 
// i.e for every EC a global object and a this keyword is created 
// in that EC this keyword generally points to the Global object ("window")
// this === window

// this Global object ("window") is a collection of function and methods loaded up default by js

// Global Scope -- any variables or functions created in js code except inside {} of another function or object etc is under the global scope

// any varible or function created in global scope is stored under the global  Object and can also be accessed thru the object
// for ex:-

// try the following code out in browser console

var a = 10;

this === window // will give out true as in global object this keyword points to the global object(window)

console.log(a);

console.log(this.a);

console.log(window.a);

// all three above code lines gives out the same output

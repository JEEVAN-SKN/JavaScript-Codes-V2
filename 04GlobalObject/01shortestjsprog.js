

// the above code lines(literally no code ) is the shortest program in js
// if we run an empty code in js browser console there is still lot running in background
//these are done by the js engine (v8 in case of chrome)

//Js engine creates an execution context and its respective call stack for every execution (even empty code)
// js engine always creates a global object ("window" in case of chrome) and a "this" keyword for an execution even if it is empty code 
// i.e for every EC a "this" keyword is created  and in global scope  "this" keyword points to Global Object  
// this === window  -- output: true (in browser console)

// this Global object ("window" incase of chrome) is a collection of function and methods loaded up default by js

// Global Scope -- any variables or functions created in js code except inside scope{} of another function or object etc is under the global scope

// any varible or function created in global scope is stored under the global  Object and can also be accessed thru the object
// for ex:-

// try the following code out in browser console

var a = 10; // this var a is in global scope 

function alpha() {
    var b = 16; // var b is not in global scope as it is inside scope of the fucntion alpha 
}

this === window // will give out true as in global object this keyword points to the global object(window)

console.log(a);  //inn case of var b will show error as it is not in global scope 

console.log(this.a);

console.log(window.a);

// all three above code lines gives out the same output

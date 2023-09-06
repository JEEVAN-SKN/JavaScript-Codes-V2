// we already got to know in last lesson that in js execution context js first scans the code in memory phase 
// and allocates memory and  stores variables as undefined and for functions it stores the func body 

// these below commands are called before the respective var and func declaration , so executes unusual
// these code get executed without error even before we actually define these var and func
getName(); // executes the function
console.log(getName); // prints just the function info 
console.log(x); // outputs undefined ( instead of error)

// here in above code the execution works as in memory phase js has already scanned thru the code 
// the function is known as memory phase saves the func body but var is undefined because memory phase saves var undeifned initially 

// this is hoisting which is a phenomenon in js where we can access the vars and funcs even before initialising them and not causing error


//but if we prints a non existent var 
// console.log(y); // it shows not defined 
        // so in js not defined and undefined is two different things

var x = 7;

function getName() {
    console.log("Namastae Javascript");
}


// these below commands are called after the respective var and func declaration , so executes as expected 
getName(); // executes the function
console.log(getName); // prints just the function info 
console.log(x); // prints var value

// for deeper understanding of call stack and hoisting u can open up browser console and go to sources and 
// observe the scope and call stack section by adding breakpoints in code and analyse their working in that point of time

// also for different style of func declaration the hoisting works different 

// arrow function 
    // gotName();  //  gives error(not a function ) instead of working because here function is declared  as a variable
                  // and therefore in memory phase it is stored as undefined and hence no code to execute

    var gotName = () => {
        console.log("Hi User");
    }

// variable type declaration 

    // giveName(); // here also same case as above as func is declared in var style

    var giveName = function () {
        console.log("Hello Everybody");
    }
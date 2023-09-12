// let and const are block scoped 
// Lets learn about Block Scope  and shadowing in js 

{
    // this is called a block --also known as compound statement
    //block is used to combine multiple statements into one group
}
// the purpose of grouping these statements are so that we can use these group where js excepts a single statement
    // this group of statements act as one statement in those scenarios
    //scenarios like condititonal statements  and loops

    if (true) console.log("hello"); // here if statement expects a singe statement to execute on true condition
    
    // but when we need to execute multiple statements we use block as shown below :
    if (true) {var z = 10;
                console.log(z); 
                console.log("hi");} // this block makes the multiple statements act as a single statement

//Block Scope is the scope of the block I.E :- 'all the variables and functions that we can access inside this block 

//**REMEMBER** // var declaration variables are global scoped as well as function scoped because variable created inside of a function, it will not be accessible outside the function.
// whereas let and const type declared variabled are function scoped as well as block scope inside a block (we will discuss block scope in detail later) /

// now lets see what does it mean "let" and "const" are block scope 
 {
     var a = 10;   // here even though we declare var a inside the block they are stored in global scope 

     let b = 100;   // here let and const b and c are hoisted and stored in a separate scope named "block" (block scope) // not "script" memory space mentioned in previous lesson
     const c = 150; // they are only accessible inside the block

     console.log(a);  // outputs as it is stored in global scope 
     console.log(b); // outputs as it is stored in block scope and we are now inside the block scope 
     console.log(c);  // same as above
 } // block scope ends here hence let and const declaration inside the block can longer be accessible 

 console.log(a);  // prints outout as 'a' is stored in global scope 

//  console.log(b);
//  console.log(c); // both b and c are not accessible as block scope is no longer present and now we are in global scope 

 // SHADOWING -- shadowing occurs when a variable declared in a certain scope (e.g. a local variable) has the same name 
//as a variable in an outer scope (e.g. a global variable). 
// When this happens, the inner variable shadows the outer variable 

var d = 230;
{
    var d = 250;
    console.log(d); //gives output as 250 bcs inner d var shadows(modifies) the outer var 
}
console.log(d); //but eventhough we call var d outside it is still the vakue of inner var d 
// because both inner var d and outer d are in same global scope and hence inner var d shadowed outer var d in the block scope
// the value of var d in gloabl scope is changed 

// but this is not the case in let and const 

let e = 200; // this is hoisted // therefore var declaration varibles are global scoped as well as function scoped because variable created inside of a function, it will not be accessible outside the function.
// whereas let and const type declared variabled are function scoped as well as block scope inside a block (we will discuss block scope in detail later)and stored inside the separate memory space ("script" in js )
{
    let e = 240; 
    console.log(e);
}
console.log(e);



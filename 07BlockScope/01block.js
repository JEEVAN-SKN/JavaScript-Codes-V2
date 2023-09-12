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
// whereas let and const type declared variabled are function scoped as well as block scope inside a block

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
console.log(d); //but eventhough we call var d outside it is still the value of inner var d 
// because both inner var d and outer d are in same global scope and hence inner var d shadowed outer var d in the block scope
// the value of var d in global scope is changed 
// normally shadowing shouldnt modify the value except in that particular scope 
//but that doesnt work with var declaration bcs var is global and function scoped but not block scoped 

//this wouldnt have worked if we put a function instead of just a block bcs now it is function scope whose working we have already learnt thru the
// working of different EC's


// but this is not the case in let and const 

let e = 200; // this is hoisted and stored inside the separate memory space ("script" in js )
{
    let e = 240; // as this is inside a block it is hoisted and stored in a separate memory space ("block"in js) rather than previous "script" space 
    console.log(e);  // here inside block scope the local var value "shadows" the script memory spave value 
        // outputs:240
}
console.log(e); //as we are now outside the block, output is : 200
// here unalike var declared variable, both let based vars are in two different scopes ("script" and "block") hence shadowing doesnt change its value 

// the child parent relnship we learnt in different funcion arised Ec's i.e the function scope also has shadowing 
//when one function executes and needs a var value it checks it on local memory and if not found then goes to outer scope 
// if both local scope and outer scope has same var name , shadowing occurs and local variable shadows the outer scope variable

// Block scope also follows lexical scope 

//each and every block has its own lexical scope 
    let f = 20;
    {
        let f = 200;
        console.log(f); //prints 200
        {
            let f = 2000;
            console.log(f); //prints  2000
        }
    }
    console.log(f); //prints 20



// this is basically shadowing, but there are some instances where errors may occur in shadowing 
//ILLEGAL SHADOWING
// these are called "Illegal shadowing"
// lets discuus them - if we have declared a var in let style and inside block we redeclared it in var style then will shadowing occur there???

// If you create a variable in a global scope with the let keyword and another variable with the var keyword in a block scope but the exact same name, it will throw an error.

// let g = 25;  //this code ends up in syntax error
// {
//     var g = 35;   // this code arises syntax error :"Identifier f has already been declared"
// }

//REASON : we know that let declared variable can be reassigned but not redeclared 
//  so when var is declaring f in blockscope it goes outside to global scope(as var is not blocks scoped) and changes value in global scope 
// but f is already declared in block separate memory ("script" in js) and wkt let variable cannot be redeclared 

// But When applied in reverse like var decl in outer scope and let declare in block scope no erroe comes up

    var g = 25;  //this code works fine in this scenario  
    {
        let g = 35;   // here even if variable declaration for same nameed variable is different, we have let type of declaration 
                        // which is block scoped and also it is fine to redeclare var type variable declarations
    }


// all these block scope and shadowing rules apply same to const type of declaration 
    const k = 35;
    {
        const k = 45;
        console.log(k); //prints 45
    }
    console.log(k); //prints 35

    // the above code also work well if block is replaced by function same for let declaration
        //bcs let and const are block scoped as well as function scoped 
           

// Common myth: arrow functions work different compared to normal function in case of scopes
    // arrow function are not different from normal function in case of scope 
    // all scope rules apply same with arrow function too



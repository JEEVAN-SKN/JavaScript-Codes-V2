// let, const and var declaration and temporal dead zone 
// syntax , reference, and type error

// as var declared variables are hoisted the same way  let and const delcaration are also hoisted but in a different way
// lets look deep into it...
// execute the below code in browser console by hosting from html page thru live server

// A] Reference error ::

    //1) Reference error - are when js engine cannot find or access variable values :---

        // reference error : not defined ( when we access a non existent variable(not declare))
        // console.log(z); --- gives the above error 


    //2)Reference error : cannot access 'variable_name' before intialization :---

        // console.log(a);x // gives undefined due to hoisting of var in global scope
        var a = 10;

        // console.log(b); // gives above referenced error as cannot access before initialization
        let b = 10; // eventhough it is hoisted we couldnt access it as undefined like last case 
        // it is because it is hoisted in another memory part("script" in browser console) not the global object
        // both let and const are hoisted in this another memory part
      
        // and as they are hoisted not in global object "this.b" ot "window.b" will ouptut undefined either before or after initialised
        console.log(this.b);
        console.log(window.b);

        console.log(b); // but now it gives output if called after line of intialisation
        //the above reference error scenario is caused only in case of let and const due to temporal dead zone
        //Temporal Dead Zone is the time period of in between the declaration and initialisation of let and const
            // note that assignment and intialisation are not same 
                //all variables if declared without assigned values then they are not assigned but intialised with spacial placeholder "undefined"
                // here the varibale is temporarily initialised with "undefined" but that doesnt count as as assignment
        // therefore when we try to access them before line of declaration(intilaisation wiht "undefined:) even in case of hoisting it shows above error
        
        //::_temporal dead zone for d exists
        //::_temporal dead zone for d exists
        let d; //::_temporal dead zone does not exist for d so can be accessed from now
        console.log(d) // we may think that this should arise reference error but in above line eventhough d is not assigned it is intialised with undefined by default
        // so gives output undefined 

// difference between let and var 
    //1)the hoisting is different as we mentioned abive 
    //2)redeclaration cannot be done (explained below ):-

        // B]Syntax error - any js syntax is violated(this error doesnt even allow execution of single line)
                // refernce erro and type error arise at specific lines of code and allows execution of all lined before them
        var e = 100;
        var e = 150; // can be redeclared
        e = 200; // vlue modified 
        // let e = 100;  // syntax error e already declared 
           
        let f = 220;
        f = 250; // can be reassigned with another value 
        // let f = 230; // but doesnt allow redeclaration
            // gives syntax error: Identifier 'f' is already declared 

// const -- const is even more strict than let 
        // it is also hoisted and stored in a separate memory and has a temporal dead zone like let

    // in additon to this it has 2 more specifications like :- 
        //1) const shuld be declared and assigned at the same time 
            // const l; // gives error syntax error (missing intializer cons declaration)
            // l = 1000; // we should assign a value at declaration 
            const l = 1000;

        //2) const cannot be reassigned it is a constant value which cannot be modified 
            // l = 1500; // gives type error: Assignment to constant variable 
            // C] Type error: Assignment to constant variable 
                // const is a type of constant variable and we are trying to modify it hence the error
        
// Usage of var, let and const 
    // 1) const :- It is recommended to use "const" wherever possible to avoid unexpected errors
    // 2) let   :- If not const use let as u can avoid the undefined hoisting errors of var declared variables 
    // 3) var   :- Mostly avoid usage, if used be very conscious of the possible errors it might arise 

    // Even if we use const and let the temporal dead zone related error might mess up things 
    // the best practise to avoid these errors declarations and intialisations on the top of the code before any data manipulation
    // thereby we shrink the temporal dead zone phase almost to zero as temporal dead zone only exist upto the intialisation of variables and functions 

// in case of let and const other than the above concepts, scope also has a lot of difference (block scope) 
// lets discuss that in the next lesson 
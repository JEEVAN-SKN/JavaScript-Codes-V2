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

        console.log(a); // gives undefined due to hoisting of var in global scope
        var a = 10;

        // console.log(b); // gives above referenced error as cannot access before initialization
        let b = 10; // eventhough it is hoisted we couldnt access it as undefined like last case 
        // it is because it is hoisted in another memory part(script in browser console) not the global object
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
           
        let f = 220;
        f = 250; // can be reassigned with another value 
        // let f = 230; // but doesnt allow redeclaration
            // gives syntax error: Identifier 'f' is already declared 
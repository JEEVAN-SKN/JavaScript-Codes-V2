//FUnctions are very beautiful and can be called the heart of Js

//Function Statement (or) Function Declaration  
a(); // can be called before declaration and still works fine due to hoisting 
    function a(){
        var a =11;
        console.log(a);
    }
    // the above way of creating a function is called a function statement or fucnction declaration
a(); // outputs value of a 

//Function Expression 
        //assigning function as a value to a variable 
        
        var hello = function (){  // here we use anonymous function (there is also named function expression, exlained in below section)
            console.log("Hello is called");
        }
        hello()

        
// Difference between Function Expression and function declaration(or)statement
            // the difference is the hoisting 
                //A)Function statement(or)declaration can be called before declaration because memory phase saves the function body before execution phase
                //B)Function expression- as function is stored in a variable it cannot be called before declaration because in memory phase variables are stored as undefined until assignment 

//Anonymous functions
            //functions without a name is anonymous function    
            // they doesnt have their own identity
            // if we create an anonymous function like below it reults in error

                // function (){     // it results into error    
                // }                // becoz according to ECMA script specification an function statement should always have a name

            //Anonymous functions are used in places where functions are used as values(assining function as a value to a variable)

// Named Function Expressions
        // when we use a named function instead of an anonymous function in an function expression
        var hey = function xyz(){
            console.log("hey called");
        }
        hey();
    // but we cannot access function xyz() in global scope, it is created as a local variable 
        // xyz()  //-- gives error
    // but can be accessed inside the scope 
        var hoy = function  xy(){
            console.log("hoy called ");
            console.log(xy);
        }
        hoy()

//Difference between Parameters and Arguments
            //Paramters - created when declaring functions
                // function onefunc(parameter1,parameter2) {
                //  console.log(parameter1,parameter2)
                // }

            //Arguments - used on function invocation
                //      - passed into function and assigned to the parameters as values 
                //  onefunc(hi,hello) //here hi and hello are arguments

//First Class Functions 
    //functions are so beautiful that we can use them as flexible as we want
    
        //1) we can assign functions as values to variables
            var get = function(param1,param2) {
                console.log(param1,param2);
            }
                
        //2) we can pass functions as arguments into other functions
            function xyz(){
                var a = 10;
            }
            get(function (){var b = 10},xyz) 
                        //outputs both function xyz and param1 passed function's body
        
        
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
    //lets see some of the particular uses of functions in js

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
        
        //3) we can return functions from functions 
            var give = function () {
                return function hello() {
                    console.log("hi");
                }
            }

            console.log(give()); // prints function hello body
                        // note that in node console exectuion it just shows function name but in chrome browser console
                                //whole function, its name and body is printed in the console 
        
    //The above seen flexibity of functions is called first class functions 
    // A variable value can be assigned to another variable, passed as arguments to a function and also returned from a function
    // The same way like variables, function can also be done so 

    //Therefore the ability to assign function to a variable, pass as arguments to a functions and returned from a function is called First Class Functions
    // First Class Functions are also called First Class Citizens 
    // therefore it is just treating functions equal to values(or) variables which are first class citizens in programming
    
    //this comes under a special type of programming named Functional programming 
            // we had already discusses this in our previous js basics repository("JavaScriptCodes_V2" linked in Readme file of repo)

            //Basically functional programming has 3 rules:
                    // 1st rule :  keep data and function separate
                            //Functional prog style 
                                    function addBonus(score){  //function doesnt need to know of any variables
                                        // it just adds 45 to whatever value given (hence functions and variables kept separate )
                            return score+45;      // less time debugging
                            }                         // no global variable stuff 
                            // as shown above in fucn prog->  first rule :  keep data and function separate

                    // 2nd rule: dont frequently change state 

                            jeevan = "hi";
                            jeevan = "hello";
                            jeevan = "how r u ";

                            // in func prog style
                            jeevan = "hi";
                            jeevan2 = "hello";
                            jeevan3 = "how r u ";
                            // even if new var declared avoid chamnging state of an already declared var 

                    // 3rd rule: treat functions as first class citizens (assign,pass argument,retunrn,use inside other func)

 //Note we are using var declaration majoritu here in code examples
        // but these properties apply the same for let and const  in addition to their block scope and other rules 
        
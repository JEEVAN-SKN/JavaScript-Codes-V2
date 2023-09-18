// in this secton we will just have closure based discussion 
    // with descriptive answers and examples in an interview based perspective


//Q1) What is closure 
    // A function along with refrence to outer environment together forms a closure
     // in other words a combination of a function  and its lexical scope bundled together 

    // Q2) detailed explanation of closures :
        //each and every function has acces to the outer lexcal environment(variables and functions present in its own scope and parents scope)
            // and when these fucntions are executed in other outer scope rather than its own scope it still remembers its lexical scope environment 
            
    //example 
        function outer(){
            var a = 10;   // can also put "let" declaration( it works the same way but it is now block scoped)
            function inner(){           //Q3) If it works the same way of we use block scope decalrations
                console.log(a);
            }
            return inner;
        }
        var close = outer(); // we assign the return value to variable close 
        close(); // outputs:10 // on invocation of variable it executes the assigned function 
        // even if we are outside of the scope of function outer we still can access var a due to closure of function inner (it has acces to parent function scope) 

        
        // the above invocation can also be done without assignment to a variable 
        outer()() // outputs:10 // the first () for execution of outer function, the second () is for execution of inner returned function
 
        // there can also be multiple invocation () than two
        // Q4) what are double ()() in  function invocation
        function first() {
            var a = 10;
            function second(){
                console.log(a);
                var b = 20;
                 function third(){
                        console.log(b);
                        var c = 30;
                            function fourth(){
                                console.log(c);
                            }
                            return fourth
                 }
                 return third;
            }
            return second;
        }
        first()()()() // outputs 10,20,30
            // 1st () executes function first and returns second()
            // 2nd () executes returned second() function which outputs var a value 10 and returns function third() 
            // 3rd () executed returned third() function which ouputsvar b value 20 and returns function fourth() 

        // Q5) will the parameter of a function come under its scope  
        //NOTE: argument of a function also comes under its scope 
            function out(b){
                function inn() {
                    console.log(a,b);
                }
                let a = 10;
                return inn;
            }
            out(6)()  // output: "10 6"
        // the parameter part of function is also saved in function body during memory phase 
            // so when we pass argument 6 in 1st () of invocation it is passed and thereby printed in console

    // Q6) show closured properties in 3 level scoping 
    // Lets also see the abive concepts in 3 level scope  chaining functions( closured )
            function outest(){
                var c = 20;
                function outer(b){
                    function inner(){
                        console.log(a,b,c);
                    }
                    let a = 10;
                    return inner;
                }return outer;
            }

            outest()("hello World")(); // outputs : "10 hello World 20"

            // the above function invocation can also be done as below 
            var exec = outest()("hello")
            exec();

        //Q6)  what does closure does if there is a presence of same variable names(conflicting names) in differnet scope 
            // Every function forst checks for the required variable in its own scope,if not found then goes to parent scope 
                    //therfore if there is variables with same name in current scope and parent scope 
                                // the variable in current executing scope is chosen(scope chaining working(shadowing))
                     //EXAMPLE
                    function exterior(){
                        var c = "outervalue";
                        function interior(){
                            var c = "innervalue";
                            console.log(c);
                        }
                        return interior
                    }   
                    var c = "externalvalue";
                    exterior()() //prints "innervalue"
                        // if the var c was not found in the scope of function interior then it choses the var c value in scope of parent funciton exterior
                        // even if not fount ther then it will look out in the global scope or block scope in global level

        //Q7) Advantages of Closure 
                    // i) used in module pattern
                    // ii) used in function currying
                    // iii) used in higher order function like memoize and once
                    // iv)helps in data hiding and encapsulation 

        //Q8) (counter question for above answer) -> explain data hiding and encapsulation
                    // data hiding is securing privacy for specific variables thereby they cannot be accessed publicly or other function    
                                //except the function it is intended to be used (also known as data privacy)
                    //Example :
                            // var counter = 0;
                            // function incrementCounter(){
                            //     counter++;
                            // } 

                            // in above code the variable counter is accessible anywhere (public access)
                            // in order to encapsulate it we can do the below :

                            

        
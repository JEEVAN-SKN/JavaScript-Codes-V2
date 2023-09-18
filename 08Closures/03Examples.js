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
        // Q4) what are multiple ()() in  function invocation
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

        //Q7)  what does closure does if there is a presence of same variable names(conflicting names) in differnet scope 
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

        //Q8) Advantages of Closure 
                    // i) used in module pattern
                    // ii) used in function currying
                    // iii) used in higher order function like memoize and once
                    // iv)helps in data hiding and encapsulation 

        //Q9) (counter question for above answer) -> explain data hiding and encapsulation
                    // data hiding is securing privacy for specific variables thereby they cannot be accessed publicly or other function    
                                //except the function it is intended to be used (also known as data privacy)
                    //Example :
                            // var counter = 0;
                            // function incrementCounter(){
                            //     counter++;
                            // } 
                console.log("Counter Section code Execution below \n ");
                    // in above code the variable counter is accessible anywhere (public access)
                    // in order to encapsulate it we can do the below :

                    function counter(){ // we encapsulate the above code by wrapping it inside a function 
                        var count = 0;
                        return function incrementCounter(){
                            count++;
                            console.log(count);
                        }
                    }
                    // console.log(count) --> Error : As count is not in global scope cannot output 
                    var counter1 = counter();
                    counter1(); //it will increment and by adding console log in inner fucntion we can see value of count == 1
                    counter1(); //increments count againg from 1 to 2 

        // Q10) from above code whatIif we call counter() function again in another variable does it have same incremented count value??
                
                    // another invocation of counter() wil create a totally new memory scope afresh it doesnt remember the incremented count value of above code
                    var counter2 = counter();
                    counter2() //again prints value 1 as new count has been created and incremented from 1 to 2 
                    counter2()
        
        // Q11) Is the above code good and scalable like if we want to add decrement and other functions ? If not how to make it scalable.

                // the above code is not scalable, if we want to add more functionalities we need to create more function and retunrn them too
                // instead we can use constructors functions for the scalability purposes 

                //Note: I am changin the function name as Timer here for avoiding error while execution

                     function Timer(){ // below is a constructor function
                        var count = 0;
                        this.incrementCounter = function () { //anonymous function assigned to a variable
                            count++;
                            console.log(count);
                        }
                        this.decrementCounter = function () {
                            count--;
                            console.log(count);
                        }
                     }

                     var count1 = new Timer(); // to create instance use "new" keyword in constructor function

                     count1.incrementCounter(); //output: 1
                     count1.decrementCounter(); //output: 0

                     var count2 = new Timer(); // creating another new instance

                     count2.incrementCounter(); //output: 1
                     count2.decrementCounter(); //output: 0

            // so hereby we can add as new methods (functions) for the constructor and use it by creating an instance 

        //Q12) Disadvantages of closures
                // i) possibility of overconsumption of memory as every time we call a function new memory space for the scope is created 
                // ii) even though some variables are not to be used they are not being garbage collected till the program expires 
                // iii) if not handled properly can lead to memory leaks as accumulation of memory overtime may freeze the browser 

        //Q13) (counter question from above answer) what is and how does garbage collector works?
                     It is a program in js engine or browser which frees up the unutilised memory space (varibaled which are of no use after a point of time)
                     In other langs like c and c++, the data type, allocation and deallocation of memory is hanled by the programmers but in js most of 
                        the work is done by js engine, therefore garbage collector comes into picture to handles these memory spaces 
        
        //Q14) how does closures and garbage collector relates to each other?
                     function z() {
                        var x = 12;
                        return function b(){  //we know that here function z's lexical scope is closured to function b here(scope chain working)
                            console.log(x);
                        }
                     }
                    z(); // here as soon as execution is over its Ec will be eliminated from
                        
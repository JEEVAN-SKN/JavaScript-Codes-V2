// in this secton we will just have closure based discussion 
    // with descriptive answers and examples in an interview based perspective


//1) What is closure 
    // A function along with refrence to outer environment together forms a closure
     // in other words a combination of a function  and its lexical scope bundled together 

    // detailed explanation:
        //each and every function has acces to the outer lexcal environment(variables and functions present in its own scope and parents scope)
            // and when these fucntions are executed in other outer scope rather than its own scope it still remembers its lexical scope environment 
            
    //example 
        function outer(){
            var a = 10;   // can also put let declaation( it works the same way but it is now block scoped)
            function inner(){
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
        function first(){
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


        //NOTE: argument of a function also comes under its scope 

        

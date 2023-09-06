// lets see another example of working of functions 
// here we focus on the storage of different variables in memory component of different execution contexts..

var x = 5;       //codeLine1
a();             //codeLine2
b();             //codeLine3
console.log(x);  //codeLine4

function a(){
    var x = 10;
    console.log(x);
}

function b() {
    var x = 15;
    console.log(x);
}

// here output is:- 
                // 10  --func a execution
                // 15  -- func b execution
                // 5   -- console log of codeline4

// explanation of execution context (EC)
// here too js works the same way we discussed in lessons before 
        // but a new execution context always checks for the local EC memory comp variable before going to global EC

            // the same way even though the global EC has an assigned value for var x (==5), in the newly created EC
            // has another assigned  value as 10 hence on exec of codeLine2 it prints 10
            // the same way for func b but after all individual func execution their respective EC is deleted 
            // hence on execution of codeLine4 js checks for value of x in global EC memory comp which is == 5
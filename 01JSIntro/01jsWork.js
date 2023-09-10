// everything in js happens inside the execution context(global execution context)
// everytime javascript runs a global execution context is created.
// it has 2 components 
// 1)Memory component( also known as variable environment)
// 2)Code component( also known as Thread of Execution)

//1 )  In memory component all variables and functions are stored in as key-value pairs

// 2) In Code component all the code is executed one line at a time(interpreted)
    // when in code execution a new function is executed a whole new execution context with its own memory and 
            // code component is created  by stacking over the global context and for now the control 
            // is given over to the new execution context till the function is completely executed 

//   ** Javascript is a synchronous single threaded language*
// Here single threaded means that only one command is executed at a time
//  and synchronous means that these single commands are executed in a specific order 

//  Asynchronous parts comes in ajax and other stuff which we will discuss later 









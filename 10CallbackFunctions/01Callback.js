// To understand Event loop of js engine properly we need to know about callback functions
    //in this section we will discuss about callback functions in detail

    // we know that in js functions are first class functions thereby can be assigned, passed as arguments, returned form other functions and used inside other functions
        //The functions which are passed into another function is known as CALLBACK functions 
    //CALLBACK functions gives access to whole asynchronous world in a single-threaded synchronous language
        //single threaded synchronous means execute one by one in a specific order
        //by default js is a singlethreaded language thereby synchronous(for eg in call stack EC'are executed one by one only[no two EC is running at once])
       
    
setTimeout(function (){  // here in setTimeout invocation we have passed anonymous function as argument(which is the callback function)
    console.log("hello")  //here anonymous function is called back from separate storage where it is stored after specified time constraint
}, 5000);

function x(y){  //function decalration
    console.log("x")
    y()
}
//here these passed functions are called anonymous functions because they are called back by the the function we pass it to
//Here function x calls it back according to its function body

x(function (){     //here we have passed anonymous functions as argument into function x invocation (anonymous function is the callback function)
    console.log("y")
})

// in above code due to callback functions asynchronous behaviour comes into picture(js engine doesnt wait for callback functions to execute, the store the 
    // callback function of setTimeout in another area and moves on to next function execution )

    

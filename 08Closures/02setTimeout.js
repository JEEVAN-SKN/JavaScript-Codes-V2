// we already know about setTimeouts through which we make a particular execution wait for some specified time
// but there is a common misunderstanding inthe working of setTimeout, lets dive deep into it

function x(){
    var i = 1;
    setTimeout(function (){  // this will execute after 3 seconds
        console.log(i);
    }, 1000);
    console.log("hi"); // this will execute first 
}
x(); // the above is due to the default asyncronous behaviour of js wiht the help of event loop 
    // which we had earlier discussed

// Now what if we need to print 1 to 6, which printed after a time interval equal to theri value 
    // normal coders will do the below

    // function y() {
    //         for(var j=1;j<=6;j++){
    //             setTimeout(function () {
    //                 console.log(j);
    //             }, j * 1000)
    //         } }
    // y()

  // from the above we would normally assume that the output will be from 1 to 6 each printed at intervals 1*1000, 2*2000 ,,1*6000 ie 1 to 6 seconds
  // but the output is :
                        // 6
                        // 6
                        // 6
                        // 6
                        // 6
                        // 6
    // here the timing was coorect but not the values we intended 
    // this happens because of the working of setTimeout based on closures

// working of setTimeout 
            //as javascript is asynchronous by default when faced with a setTimeout js takes this function to be executed with its closured scope 
                // and stores it in another area till the timer count is completed 
            // Here in above working the functions closured scope is also saved which will hepl us to remember local scope variables of hat function
                    // but through we are inly referencing to the scope not saving its value , so in the first 1 sec timeout is finished thru the function we refer to the var j
                        //but even before 1 sec timer finished js has already looped all 6 times thru the loop created 6 setTimeouts and their refernces in closure 
                        // as loop was executed the memory area where we refer to var j was also incremented , thereby before 1s timeout is completed the var j referenced has already incremented to 7
                        // therefore thru closure here in all setTimeout function we are referencing the same memory address of var j which is being incremented 

                    // to avoid this we can use 2 ways
                    //WAY-1 (recommended) : block scoped declarations -> let 
                            function z() {
                                for(let j=1;j<=6;j++){
                                    setTimeout(function () {
                                        console.log(j);
                                    }, j * 1000)
                                } }
                            z()
                        // here for each setTimeout loops separated block scope is being created var j -> 6 diff block scope for var j (1,2,3,4,5,6)
                        // through block scope we are not updating same variable address referneced by all functions but 6 different variable in 6 different block scopes 

                    //WAY-2 : function scoping each loop     
                        //what if we are not allowed to use block scoped declarations but only use "var" then we can function scope each of these var j separatly
                          
                        // function z() {
                        //         for(let j=1;j<=6;j++){
                        //             function scope(j){
                        //                 setTimeout(function () {
                        //                     console.log(j);
                        //                 }, j * 1000)}
                        //             scope(j);
                        //         } }
                        //     z()

                        // here in the above code we have enclosed setTimeout under a function with a parameter j
                                // when in each loop j is incremented then function scope is invocated with the new incremented value of j
                                    // and therefore separate copies of var j is created thru function scope with the respective loop time value 
            
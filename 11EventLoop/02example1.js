// Example 1
  
            //  console.log("Start");  // prints in console by accessing the console of web api of browser through global object window

            //  setTimeout(function cb() { // registers callback function in web api
            //     console.log("Callback");  
            //  }, 5000);           //sets timer using timer functionality of web api

                        // after the timer for 5 seconds is over the registered callback function is pushed into "CallBack Queue" after removing it from web API section of browser
                // the task of taking this callback function from CALLBACK QUEUE to callstack is done by event loop
                    //callback queue is also known as task queue/message queue/macrotask queue
            // event loop comes in picture here ... it always checks if the call stack is empty and whn empty it check the callback queue and also the microtask queue(we''ll discuss microtask queue inlater example)
                        // if any callback function is pushed into it form registered phase in web api then event loop brings it to call stack
                                //and then the callstack executes it quickly

    // Why couldnt we direclty pass callback from reistering in webapi to callstack( why need of callback queue)
                // if multiple callback function are registered and theit execution time has come the they are queued in the callback queue
                    //callback queue is FIFO type so who were pushed in first is executed 

    //Refer picture "11EventLoop/Eg1explanation.png" for better understanding

// Example 2 

            console.log("Start"); // as usual as above orints using console of webapi

            document.getElementById("btn").addEventListener("click", function cb() {
                console.log("CallBack");
            })  //the above is done by accessing the DOM apis 

            //the callback function is registered in the web api and an "click" event is attached to it
            // whenever a click event occurs, the callback function is pushed to the callback queue and then event loop brings it to the callstack when it is empty
            //but in case of eventlisteners they are not removed form webapi when they are pushed into the callback queue
                //coz whenver a "click" event occurs it should again push this callback func to the callback queue 
                    //hence it is always present in webapi till end of program , unless it is removed by using removeEventListener() method

            //Refer picture "11EventLoop/Eg2explanation.png" for better understanding

// We have seen how js engine access the setTimeoutm, DOM API, console
                // in case of accessing fetch() method , the working is different, let's see 

//Example 3:                

            console.log("start");   // as usual executes trough console

            setTimeout(function cbt() {  //registers cbt() in web api and sets timer for 5000 in web api
                console.log("Cb settimout");//after timer ends pushed to callback queue
            },5000)         // an then when callsatck empty executed wiht help of event loop

            fetch("https://api.netflix.com").then(function cbf() {
                console.log("netflix api");   
            }) // fecth method basically requests an api call and returns a "PROMISE" 

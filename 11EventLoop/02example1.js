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

            fetch("https://api.netflix.com") // fetch method basically requests an api call and returns a "PROMISE" 
            .then(function cbf() {  //once promise is resolved the passed callback function mentioned in "then" is executed
                console.log("netflix api");   
            }) // alike setTimeout the callback function of fetch is registered in the webapi, suppose we get response within 50ms (<5s of timer)
                //then this promise based callback is now pushed into a separate queue named "MICROTASK QUEUE"    
                        //Microtask queue is also called Job queue or promise job queue

                      // Note:Callback functions like promises and mutation observer(checks whether any mutation in DOM tree, if present execute a callback function)
                                //goes into microtask queue 
                        //all other callback functions are pushed into callback queue
                //the above setTimeout also expires and hence timer callback func is pushed inside the callback queue

                //the only difference between microtask and callback queue is that microtask queue has higher priority over callback queue
                //when callstack is empty event loop checks for both callback and microtask quueu but pushes tasks in microtask queue first into the callstack
                    
                //INTERVIEW question:   
                      // 1) Eventhough there are multiple task in microtask queue and only single task in callback queue, only after executing all microtasks, the callback queue is considered
                      // 2) Sometimes the microtask inside the microtask queue itself creates another microtask and appends to the queue, and this continues
                                    //then event loop will also continously push them into callstack and ignores callback queue till microtask queue is over
                                        //this condition is called the STARVATION of callback queue

                    //for better understanding refer image "11EventLoop/Eg3explanation.png"

        // We have now discussed in depth about the working of browser,web apis with js engine's call stack through global object window
        // In next session we'll discuss about the architecture and working of js engine and javascript runtime in detail
                    
                
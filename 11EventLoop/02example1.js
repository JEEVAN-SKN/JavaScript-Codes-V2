// Example 1
  
            //  console.log("Start");  // prints in console by accessing the console of web api of browser through global object window

            //  setTimeout(function cb() { // registers callback function in web api
            //     console.log("Callback");  
            //  }, 5000);           //sets timer using timer functionality of web api

                        // after the timer for 5 seconds is over the registered callback function is pushed into "CallBack Queue"
                // the task of taking this callback function from CALLBACK QUEUE to callstack is done by event loop
                    //callback queue is also known as task queue/message queue/macrotask queue
            // event loop comes in picture here ... it always checks if the call stack is empty and whn empty it check the callback queue
                        // if any callback function is pushed into it form registered phase in web api then event loop brings it to call stack
                                //and then the callstack executes it quickly

    // Why couldnt we direclty pass callback from reistering in webapi to callstack( why need of callback queue)
                // if multiple callback function are registered and theit execution time has come the they are queued in the callback queue
                    //callback queue is FIFO type so who were pushed in first is executed 

    //Refer picture "11EventLoop/Eg1explanation.png" for better understanding

// Example 2 


            


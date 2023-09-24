// We have already discussed about the working of the call stack,callback and job queue and the event loop
    //Event loop constantly check the callstack, callback and job queue and if the callstack is empty then pushes tasks form queue onto the callstack for execution
    
    //Based on this working there is a scenario under which setTimeout may not work as expected to..

        //If setTimeout is set for 5 seconds and if there is aother 1000 line of code which takes 10 seconds to execute 
        //then the eventloop will only let the setTimeout callback function to get into callstack after the 10 seconds execution
        //eventhough the 5 second timer expires on the 5th second and the callback function is pushed form web api into callback queue 
        //the callstack is still busy and hence the eventloop will not push the callback from queue till callstack is empty(after 10 min execution)
            //This is how js engone works and this behaviour is called the concurrency model in js
   
    //But to show a demo we cannot write 1000 lines of code instead we can "block the main thread" (or) make the calstack busy for 10 mins
            //by using below code 
    
        // in js -> new Date() will give us the Day, Date and Time as output

        console.log("Start")

        setTimeout(function cb() {
            console.log("Callback");
        }, 1000)  // prints after 1 second (1000 milliseconds)

        console.log("End");

            //below code will be equivalent to huge code execution worth 10 seconds

        let startDate = new Date().getTime() // stores current time in startDate at assignment 
        let endDate = startDate;   //copies startDate
        while( endDate < startDate + 10000) {     //iterates till the 10s + startDate time( runs for 10 seconds )
            endDate = new Date().getTime()  //updates with current time at each iteration of while loop
        }

        console.log("While loop ecpires ");

                //the console output will be :- Start
                                            //  End    
//after 10 seconds comes out of while loop->//  While loop expires  
  //then setTimeout funtion                 //  Callback

  // In the above code eventhough the timer expires after 1 second the other code executes for 10 seconds only after
        //which callstack is empty and only then eventloop pushes callback function into callstack from callback queue

    //Therefore in js setTimeout only assures it runs atleast after specified time but not exactly after that in these scenarios



    



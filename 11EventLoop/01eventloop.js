// we have already learnt about call stack 
    //Call stack of javascript engine just quickly executes whatever task which is given to it 
        //It cannot wait for a particular time or wait for response(timer based methods and async methods)
     //In order to handle a time based fuction we callstack need access to timers
        //the same way the js engine's call stack needs a lot of access to various superpowers(methods) inorder to do a lot of functionalities in the browsers

// js engine(call stack) may need acces to timers, local storage, geolocation, bluetooth, webservers, dom representation of responses form servers and many more 
    //  in order to access these superpowers(methods) js engine needs web API's
    //Web API's provide a) setTimeout() method thereby access to timers
                     // b) fetch() to get response from web servers
                     // c) local storage 
                     // d) console to print values 
                     // e) location services 
                     // d) DOM methods 
    //Note: the setTimeout function or console we use are not part of javascript, they are provided by web api's of browser given   
                    // to js engine through the global object named window (incase of chrome)

    //Therefore browser provide all the access to require functionalities to the call stack from its Web API 
            //through the global object "window"(incase of chrome)
    
        //eventhough we dont write window.setTimeout(), just when we are in global scope all methods we access is through the window object
            // window.setTimeout() === setTimeout()
            // window.console.log() === window.console.log()




 
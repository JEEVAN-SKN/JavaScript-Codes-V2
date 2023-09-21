// document.getElementById("clickMe").addEventListener("click",function xyz(){
//     console.log("Button Clicked");
// });

        //here in above we called the button by calling its Id and adding a eventlistener
        //here the function xyz() fuction is the callback function bcs it is called and executed when the event "click" occurs on the button 

        // till the click event occurs(we click the button) th call stack is empty, when the event occurs all of sudden the function xyz comes up in the call stack and is executed 
        //here behind the scenes when eventlistener is run, the callback function is stored in another space and is only brought to the call stack when event occurs

//Now what if we want to console log the n'th time which the button is clicked, we can use a varibale to track it

// var count = 0;
// document.getElementById("clickMe").addEventListener("click",function xyz(){
//     console.log("Button Clicked",++count);
// });

    //but here the count variable is accessible globally which is not a good practise hence we need to provide data hiding through 
        //enclosing inside a function(closures)

function attachEventListeners(){
        let count = 0;
        document.getElementById("clickMe").addEventListener("click",function xyz(){
            console.log("Button Clicked",++count);
        });
    }
attachEventListeners(); 

//here in browser console keep the debugger in consolelog of function xyz and click on the button
    //-> in the sources we can see after clicking the button the function xyz is callbacked and executed in call stack but in scope 
            //it has closured with scope of function attachListeners too
            //the count value in closure is incremented everytime we click the button

    //Devtools :
        // the same way if we got to html file through elements section and click on button tag line we can see a tab named "eventlisteners"
            //when we click the button and check over the eventlistener tab we can now see click event added to it 
                //on expanding the click event , we can find a handler which is the callback function xyz() in which there will be 2 scope
                    // namely global scope and the closured scope
                    //there will be a lot of additonal stuff there like "proto" which we will discuss in later sessions

//Garbage Collection && removeEventListeners
     //It is normal practise to remove EventListeners which garbage collects the eventlisterner their related scopes
     //the reason is that normally for a function it's closured scope exists only till it's execution is existent,
        //this doesnt work the same way when a function is referenced somewhere else or is a callback function
                // here in case of Eventlisteners, the button can be clikes anytime and for printing the n'th time it has been clicked
                    //the closured scope of th eventlistener is not removed after its execution, it is being tracked and kept alive as long as the program exists
                //when there is multiple eventlisteners and their own related scopes, they take a lot of memory space and may result into slowdown of program execution
                //hence it is always recommended to remove eventlisteners in order to avoid memory leaks
        //But this is understandable for something referred in global objects window but why for html components, 
                //arent these evenlisterners go out when a html component unmounts ?
                    //these will be done automatically in modern browsers
                        //but legacy browsers like IE doesnt have these mechanism and hence lead to memory leaks
                        
                
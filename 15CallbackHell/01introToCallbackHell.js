// js is single threaded and has only one call stack which executes one thing at a time
    // but inorder to do asynchronous task we use callback functions thru different methods

//for eg we have a ecommerce website 
     //we have a list of things in cart and we need to do 3 things here 
    //                                         1) create order
    //                                         2) proceed to payment 
    //                                         3) display order summary
        // but here we need to do payment only after order creation and same way 
            // display order summary only after payment thereby 1st order, 2nd payment, 3rd order summary
                //in this scenario we can use callback functions 
                    //we can pass each functions as callback functions into upper functions like below 
       const cart = ['shoes', 'pants', 'kurta']
       // let ther be an api which takes care of all tasks
        api.createOrder(cart, function() {  //here we gave payment func as callback inside createOrder so only after createOrder payment func is called 

            api.proceedToPayment( function() {

                api.showOrderSummary()      //same way here only after payment is called then order summary is called
                        // ,... and more callback functions for more scenarios 
            })
        }) 
            //here we can see one callback inside another callback and its keep going on depending on the scenarios 
                //this type of code makes it unreadable and unmaintainable
                    //it makes the code grow horizontally instead of vertically 

//Problems in Callbacks
        //CALLBACK HELL
            //these scenarios where one callback function calls another another callback func and other if case scenarios and lot more
            // is called the Callback Hell
            //these occur when they are lot if api's and other functions which are highly interdependent
        
        //Pyramid of Doom
            //the callback hell causing code has also a specific horizontal pyramid like structure
                // this is called the pyramid of doom

        //Inversion of Control in Callback

            //it is a situation in which u lose the control of our program when we use callback functions
                //for eg in above example we used proceedToPayment function as callbck function inside the createOrder Function
                    //if the developer only has knowledge of proceedToPayment func and not of createOrder func then he may not know of the problems arising
                    //we may not know whether the function to which we give our callback functions may contain lot of bugs or other 
                        //the higher order functions may not even call our callback function in some case which we are not aware of 
                            //we are blindly trusting the higher fucntion 
                                //thereby when we give our callback function to a higher fuction we are also giving the control over our callbck func to the higher func
                //this is called inversion of control in callbacks 
                    //in next session we will study how to handle inversion of control and promises 
    //Recap
        //Importance of callbacks: async programming in js exists bcs of callback functions
        //Issues due to callback: 
                    //Callback Hell
                    //Inversion of Control


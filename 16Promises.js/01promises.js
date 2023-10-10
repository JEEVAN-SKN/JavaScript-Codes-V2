// In previous session we learnt about the shortcomings of callback such as inversion of control and callback hell
// we will learn about how we handle these problems using promises

//Callback example 
const cart = ['shoes', 'pants', 'kurta']

// let ther be an api which takes care of all tasks
 api.createOrder(cart, function() {  //here we gave payment func as callback inside createOrder so only after createOrder payment func is called 

     api.proceedToPayment( function() {

         api.showOrderSummary()      //same way here only after payment is called then order summary is called
                 // ,... and more callback functions for more scenarios 
     })
 }) 
    //here 1st issue -> inversion of control )handing over control of proceedPayment to createOrder
    //2nd issue -> callbackhell ( api inside api inside api) - horizontal growth of code 

// promises handles these situations
// as we early mentioned createOrder is an api and it will return as a promise(defined is api's defintion)

const promise = creatOrder(cart); //we save that retunrd promise in const promise 

// {data: undefined}

// In simple term promise is an object , at first it is undefined and later after some time when we get response form api
    //the promise is filled with the recieved data

// {data: orderDetails}  //data filled in promise after a point of time
// now inorder to do operations with the recieved data we need to declare intended operations though ".then"

promise.then(function (orderId) { //functions is executed when promise gets data
    proceedToPayment(orderId);
})

// inversion of control handling:
    // in callback we were passing a function to another function(passing over control)
    // but here in promises we attaching a function to the promise object
        //the function is automatically called when promise object is filled with the data
    //therby we dont pas over the control of our fuction 







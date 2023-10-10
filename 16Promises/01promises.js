// In previous session we learnt about the shortcomings of callback such as inversion of control and callback hell
// we will learn about how we handle these problems using promises

//Callback example 
// const cart = ['shoes', 'pants', 'kurta']

// // let ther be an api which takes care of all tasks
//  api.createOrder(cart, function() {  //here we gave payment func as callback inside createOrder so only after createOrder payment func is called 

//      api.proceedToPayment( function() {

//          api.showOrderSummary()      //same way here only after payment is called then order summary is called
//                  // ,... and more callback functions for more scenarios 
//      })
//  }) 
//     //here 1st issue -> inversion of control )handing over control of proceedPayment to createOrder
    //2nd issue -> callbackhell ( api inside api inside api) - horizontal growth of code 

// promises handles these situations
// as we early mentioned createOrder is an api and it will return as a promise(defined is api's defintion)

// const promise = creatOrder(cart); //we save that retunrd promise in const promise 

// // {data: undefined}

// // In simple term promise is an object , at first it is undefined and later after some time when we get response form api
//     //the promise is filled with the recieved data

// // {data: orderDetails}  //data filled in promise after a point of time
// // now inorder to do operations with the recieved data we need to declare intended operations though ".then"

// promise.then(function (orderId) { //functions is executed when promise gets data
//     proceedToPayment(orderId);
// })

// inversion of control handling by promise:
//promise advantages on par to callback:
    // in callback we were passing a function to another function(passing over control)
    // but here in promises we attaching a function to the promise object
        //the function is automatically called when promise object is filled with the data
    //therby we dont pass over the control of our fuction 

    //promises gives us the guarantee that whenever promise object gets a data all the functions attached through .then is called
                            // and also assures it is called only once (1 time)
    //all data inside is also unmutable, we can only access it and manipulate that data but never modify the promise object

    //so like callback we dont need to worry about the vulnerabilities caused due to callback by using promise

// promises are lot more than just an object 
    //lets see how a real promise looks like 

//execute the above code in browser
 
const GITHUB_API = "https://github.com/JEEVAN-SKN/"

// fetch() --fetch() is api to make external call and gives us response as promise 

const promise = fetch(GITHUB_API);
//if we place a debuger in abive line and checkout sources -> scope in browser, we can find a promise Object with some content
            //refer image '16Promises/promiseobject.png'
    // a promise object has 2 things 
        //PromiseState: "pending" and "fulfilled" (state of promise)
        //PromiseResult:  stores returned data

console.log(promise);  //OUTPUT: "Promise { <pending> }" in node 
 //normally we expect that this gives us a promise with state:"fulfilled" and result with the retunred data
    //but js callstack doesnt wait for asyn functions, it jist executes the above log function 
                    //therefore when ot logs te promise at that point of time the promise has only been created and not returned with data
                    //hence gives PromiseState as "pending"
    //but 
 





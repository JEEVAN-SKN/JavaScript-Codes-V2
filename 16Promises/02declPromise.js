// we'll discuss about creating and utilising our own promise and promise chaining here

// Lets create a function which returns a promise and just make it replicate a async(takes time) function for now
const cart =["shoes","denim", "bags","kurta"]

function createOrder (cart) {
    return new Promise(function (resolve, reject){  //promise creation constructor syntax
        // createOrder logic
        // validateCart logic 
        // we get orderId 
        if(!validateCart(cart)){  //if cart is not valid - failure handling
            const err = new Error("Cart is not valid");  //error creation constructor syntax
            reject(err);            //reject - if promise doesnt get any data, we give error with error message 'err' content
                        //but this will arise as a browser error in console, the user may not know this 
                                //thats why we use catch when we use these promises  
        }
        // logic for create Order 
        const orderId = "12345"; //if it works then orderId is created 
        if (orderId){
            setTimeout(function (){
                resolve(orderId);   //resolves after 5 seconds to actuate asyn function
            },5000)
         //if promise is fulfilled, then we retunr orderId as the PromiseData
        }
    });
    // thereforewhen creatOrder() is called promise is created as above and retunrned  
};

function validateCart(cart){
        //validation logic 

   //   return false; //we'll get eroor with message "Cart is not valid" but this is in browser console
                //user may not notice it, so we need to add catch block s in promise for error handling
                
        return false; // as we are just demonstrating , we return true so promise gets fulfilled 
                // we'll get output 12345

}



const buy = createOrder(cart); //here buy is retured with the above created promise 
 console.log(buy);  //prints promise in pending state as promise have not yet executed (needs 5 secs in this case to finish)

buy.then( function(orderId){  // Whenever a promise is fulfilled and gets data , the below .then and .catch are executed on the data -only once whenever promise gets fulfilled
                                                        // and the promise is unmutable only its data can be used and manipulated                                                                                     
    console.log(orderId);  //12345
    console.log(buy); //prints promise with state fulfilled and with content 
})//output"// Promise { <pending> } //
           // 12345
           // Promise { '12345' } //refer image "16Promises/browseroutput.png" fir chrome browser console output 
.catch(function (err){
    console.log(err.message);
})
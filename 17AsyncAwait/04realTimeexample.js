// Handling a fetch call with async and await
    //fetch os a function from browser which lets us make an api call and returns with a promise

//working of fetch()
    // fetch() is basically a promise when it get resolved (or) when we get data from server we get -> Response object -> 
                //the response object has a body which has a readable stream 
                    // readable stream need to be changed into json 
                        // Response.json() which again is a promise which is then resolved 
                        // When it get resolved we get the intended data

// Lets use a free api provided by api.github.com
    // "user_url"="https://api.github.com/users/{user}"
        //hence to get my gihtub account details url is "https://api.github.com/users/JEEVAN-SKN"

//Error handling in async await 
        // Although we can still use the .catch method of promise in async await too but the recommeded style in async await is try and catch block
        // We put the code to be executed in try block and the code for error scenarios in catch block



//making api call to the url
const API_URL = "https://api.github.com/users/JEEVAN-SKN";

async function handlePromise(){ //as await is called handlePromise is suspended till await function is done resolved or rejected 

    try {
    const data = await fetch(API_URL);   //fetch() retunrs api result which is response object which inturn saved in 'data'

            //We can convert object response body which is a readable stream into json - data.json (we can also convert into string or text) 
                // here we know that this github api gives result as json hence we use 'data.json'
                    //data.json also gives us a promise as return hence we need to use await to resolve it further 
    const jsonValue = await data.json();  // handlePromise suspended toll data.json is resolved or rejected inwhich result is stored in jsonValue 
    
    console.log(jsonValue); //printing the result into console
    }
    catch (err){  // if any of the await function fail in try block it just jumps to catch block
        console.log(err);   //it will get the error and prints it in console 
                    //without this only browser error will show up in console
                        //but with catch block u can manipulate whatever u want to do incase of error
    }
}
handlePromise();

// traditional way of error handling in async await 
        //we dont use the try and cathc block 
            //WKT that an async function always returns a promise so using the asynfuncname.catch() we can handle the error in the promises 

    // handlePromise().catch((err)=> console.log(err));

    //you can choose either try,cathc block or olde style asyncfuncname.catch() method



//Interview Tips 
    // point to eloborate (never forget)

        // diff btw 'async' keyword and asynchronous functions 
            // 'async' is a keyword used with function to make them async and tell them that asynchronous functions are different
    
        // await can only be used inside asynd function and they are used to handle promises which are asynchronous


//Async await vs Promise.then/catch
    //async await is just a syntactic sugar over the promise.then and catch
        //behind the scenes js just executed these stuff in promise.then and catch even if we use async and await 

    //both are same in terms of execution in backend but async await gives us less confusion in written code

        //another adv of using async await is we dont have to deal with callback
            //we need to use promise chaining to hanlde all callbacks but here in wriiten code we dont need to handle them
             // It is direclty handled by async await usage which executes in promise.then and .catch fashion
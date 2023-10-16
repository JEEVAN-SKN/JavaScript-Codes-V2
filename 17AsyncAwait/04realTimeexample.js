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

//making api call to the url
const API_URL = "https://api.github.com/users/JEEVAN-SKN";

async function handlePromise(){ //as await is called handlePromise is suspended till await function is done resolved or rejected 

  const data = await fetch(API_URL);   //fetch() retunrs api result which is response object which inturn saved in 'data'

        //We can convert object response body which is a readable stream into json - data.json (we can also convert into string or text) 
            // here we know that this github api gives result as json hence we use 'data.json'
                //data.json also gives us a promise as return hence we need to use await to resolve it further 
  const jsonValue = await data.json();  // handlePromise suspended toll data.json is resolved or rejected inwhich result is stored in jsonValue 
  
  console.log(jsonValue);

}
handlePromise();



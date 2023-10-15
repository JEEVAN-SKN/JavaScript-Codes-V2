// Handling a fetch call with async and await
    //fetch os a function from browser which lets us make an api call and returns with a promise

//working of fetch()
    // fetch() is basically a promise when it get resolved (or) when we get data from server we get -> Response object -> 
                //the response obejct has a body which has a readable stream 
                    // readable stream need to be changed into json 
                        // Response.json() which again is a promise which needs to be resolved 
                        // When it get resolved we get the intended data

// Lets use a free api provided by api.github.com
    // "user_url"="https://api.github.com/users/{user}"
        //hence to get my gihtub account details url is "https://api.github.com/users/JEEVAN-SKN"

//making api call to the url
const API_URL = "https://api.github.com/users/JEEVAN-SKN";

async function handlePromise(){

  const data = await fetch(API_URL);

  const jsonValue = await data.json();

  console.log(jsonValue);

}



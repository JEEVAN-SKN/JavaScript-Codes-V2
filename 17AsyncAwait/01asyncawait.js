//In this session we're gonna discuss about the follwoing questions
    // What is async?
    // What is await?
    // examples,behind working and error handlig in async await
    // Async await vs Promise.then/.catch

//async is a keyword to create a async function 
//async function always returns a promise -> that is, in the function definiton we can either create and return a promise
                                    //or u can return whatever u want(string or number) but async wraps it in a promise and retunrs it 

async function getData(){
    return "Namaste"  //we can either create and return a promise or inut anything u want which will be eventually wrapped inside a promise
}

const AsyncData = getData();
console.log(Async);  //output: Promise { 'Namaste' } //eventhough we gave a string in definiton it wrapped it in a promise 

AsyncData.then(function(result){ //as AsyncData contains a promise we can use '.then' on it 
    console.log(result);  //outputs the data of the promise inside AsyncData
})


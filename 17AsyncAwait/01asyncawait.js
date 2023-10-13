//In this session we're gonna discuss about the follwoing questions
    // What is async?
    // What is await?
    // examples,behind working and error handlig in async await
    // Async await vs Promise.then/.catch


//What is async:

//async is a keyword to create a async function 
//async function always returns a promise -> that is, in the function definiton we can either create and return a promise
                                    //or u can return whatever u want(string or number) but async wraps it in a promise and retunrs it 

async function getData(){
    return "Namaste"  //we can either create and return a promise or inut anything u want which will be eventually wrapped inside a promise
}

const AsyncData = getData();
console.log(AsyncData);  //output: Promise { 'Namaste' } //eventhough we gave a string in definiton it wrapped it in a promise 

AsyncData.then(function(result){ //as AsyncData contains a promise we can use '.then' on it 
    console.log(result); //output: Namaste //outputs the data of the promise inside AsyncData
})

//what if we retunr an already declared promise inside an async function? does it again wrap the input promise inside another promise??

const pr = new Promise(function (resolve,reject){
    resolve("this promise is resolved")
})

async function recieveData(){
    return pr;
}

const recievedData = recieveData();
recievedData.then((res)=>{
    console.log(res) // output: this promise is resolved
})

//What is await:
    //await can only be used inside a async function,-->it makes js to wait for completion of async function
    //async and await is used to handle promises but we already have ".then" and ".catch"
            // to understand the difference we need to know how they are used and whayt is the difference between them

//we saw in the past session that promises are only executed after al synchronous executions are done and the call sctak is empty 
//but the difference in await is that js call stack waits till the function called thru await is executed 

const p = new Promise(function (resolve,reject){
    resolve("asyncawait vs .then/.catch");
})

// .then fashion
p.then(function(res){
    console.log(res);
});

   //when js executes both the recieveData which is promise retunred thru async function and the abovr p.then , js detects thses two are asynchronous func and thus gives it to the web api 
                        //even if it is called by the we api and put in the queue , event loop only executes it after executing all other synchronous executions 
//  async await fashion                       
async function Done() {
    const d = await p;
    console.log(d);
}
Done();

console.log("this will be executed before all promise based execution which are asynchronous ")


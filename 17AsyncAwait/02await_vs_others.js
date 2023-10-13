//we will dicuss here how await keyword inside an async function makes js to wait for completion of asynchronous function 
                // before executing any other thing inside the  async function 
            //note that it doesnt stop all other sync function or code of the whole code 
                    //it just stops the exectuion of other code inside the async function block {}


const p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise is resolved")
    }, 5000);
})

// function getData(){
//     console.log("Namaste javascript");  //this will be printed first with no delay
//     p.then((res)=>console.log(res))     //this is printed 3rd after 5 seconds
//     console.log("namaste js");              //this will be printed second with no delay
// }
// getData()

async function retrieveData(){
    console.log("namaste javascrpt");  //this will be printed first with no delay
    const a = await p;      //but as await is used here , js callstack waits till the async operation finishes execution 
    console.log(p);                 //js waits for the promise to get resolved 
    console.log(a);
    console.log("namaste js"); //this will only be executed after the above three lines of code is executed 
}           //therefore js callstack which usually doesnt wait for async functions is made to wait by using await keyword
retrieveData()

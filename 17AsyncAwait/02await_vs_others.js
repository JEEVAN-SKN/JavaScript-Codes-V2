// //we will discuss here how await keyword inside an async function makes js to wait for completion of await function 
//                 // before executing any other thing inside the  async function 
//             //note that it doesnt stop all other sync function or code of the whole code 
//                     //it just stops the exectuion of other code inside the async function block {}

//please comment out each section to check their exectuion individauly for less confusion 

const p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise is resolved")
    }, 5000);
})

// // function getData(){
// //     console.log("Namaste javascript");  //this will be printed first with no delay
// //     p.then((res)=>console.log(res))     //this is printed 3rd after 5 seconds
// //     console.log("namaste js");              //this will be printed second with no delay
// // }
// // getData()

// async function retrieveData(){
//     console.log("namaste javascrpt");  //this will be printed first with no delay
//     const a = await p;      //but as await is used here , is appears that js waits till the await operation finishes execution 
//     console.log(p);                 //js waits for the promise to get resolved 
//     console.log(a);
//     console.log("namaste js"); //this will only be executed after the above three lines of code is executed 
// }           //therefore js callstack which usually doesnt wait for async functions is made to wait by using await keyword
// retrieveData()
            //But in real the callstack is not waiting , bcs if callstack waits then it would be equivalent ot blocking the main thread
                        // and blocking the main thread is not recommended in js
            //hence what happens is that callstack when meets an await methof inside an async function , it just suspends the execution of the async function   
                                            // till the await method is finished execution or promise is resolved 
                                            // it doesnt stop the main block only that particulare async function from where await came is suspended 
                                            //remaining code for sure will be executed while the await promise is being resolved 
                                            //once the the await promise is resolved, then it executes the next command inside the async function     


    
//using two await methods in an async function 

async function Data(){
    const val1 = await p   //we may think first await waits for 5 secs executes then 2nd await waits for 5 seconds and executes 
    console.log(val1);         //but both await function execute at same time though execution is done line by line
                                    //line be line i mean print (p) then hi hello ,then (p) again then he hello
                                            // but all these await functions timer starts same time hence when first val1 is printed and it goes to next val2
                                                    //by that time val2 's 5 second timer has also expired and it has been already pushed into the queue
    console.log("hi hello");                

    const val2 = await p 
    console.log(val2);

    console.log("hi hello");

}
Data()

//Lets see a more complex example for understanding multiple 
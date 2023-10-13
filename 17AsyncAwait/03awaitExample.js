const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 is resolved")
    },5000)  //needs 5 secs to resolve 
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 is resolved")
    },10000) //needs 10 seconds to resolve
})

async function handlePromiseAB(){
    const val1 = await p1;  //await function comes so callstack suspends async function handlePromiseAB
                        //after 5 seconds promise resolves So execution of handlePromiseAB is resumed
    console.log(val1);   // executes this line 

    const val2 = await p2;  //again await function but timer 10 secs but 5 secs already gone so for remaining 5 secs till 10 sec timer expires
            //handlePromiseAB is suspended, after 5 secs (total 5+5 = 10), 10sec timer expires promise resolved hence again function execution resumed 
    console.log(val2);  // also printed after above line 

}
handlePromiseAB()

console.log("hi hello");  //this will be printed at first itself before any exectuion of await method cos await only can suspend execution of ots origin async function
            //not other code ( or else it will cause main thread blocking)


// comment above function and now comment out below code and see exectuion for understanding the comment explanation 

// async function handlePromiseBA(){
    
//     const val2 = await p2;  // needs 10 secs so suspended for 10 sec and then after promise resolved execution resumed
//     console.log(val2);

//     const val1 = await p1; //when js comes here this timer only need 5 secs to expire but already 10 sec gone in above promise resolving 
                        //therefore here too timer expired and promise resolved hence js doesnt wait for any more time 
//     console.log(val1);  //and directly prints it after val2 is printed 
// } 
// handlePromiseBA()
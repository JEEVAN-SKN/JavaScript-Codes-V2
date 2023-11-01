//comment out and in each section to execute them individually

//---------------------------------------------------
//Promise.all CASE:ALL SUCCESS

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"),3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 Success"),5000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Success"),2000);
// })

// //ALL Resolved promises case: SUCCESS

// // Promise.all

// Promise.all([p1, p2, p3]).then((res) => {
//     console.log(res);     //output: [ 'P1 Success', 'P2 Success', 'P3 Success' ]
// });
//----------------------------------------------------------

//Promise.all CASE:Failure of one 

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"),3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 Fail"),5000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Success"),2000);
// })

// //p2 is rejected 

// // Promise.all

// Promise.all([p1, p2, p3])
// .then((res) => {
//     console.log(res);     //output: P2 Fail(node) :-- in browser will come as caught error
// })
// .catch((err) => {  //we do this to catch th error give a defined response or else uncaught error will display in console in browser(we catch the uncaught error)
//     // console.log(err);     // just prints the error message like a text
//     console.error(err);  // prints the error message in console like a error (not uncaught but caught error)
// })

//------------------------------------------------------------

//Promise.allSettled
// same failure case in Promise.allSettled 

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"),3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 Fail"),5000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Success"),2000);
// })

// //p2 is rejected 

// // Promise.allSettled
//             // the safest version of all promises 
// Promise.allSettled([p1, p2, p3])
// .then((res) => {
//     console.log(res);     //output: [  // in browser each array eleemnt is an object which if success contains status and value
//                                         // or if it is failure it conatains a status and reason(which is the catch error content)
//                                 //     { status: 'fulfilled', value: 'P1 Success' },
//                                 //     { status: 'rejected', reason: 'P2 Fail' },
//                                 //     { status: 'fulfilled', value: 'P3 Success' }
//                                 //   ]  
// })
// .catch((err) => {  //we do this to catch th error give a defined response or else uncaught error will display in console in browser(we catch the uncaught error)
//     // console.log(err);     // just prints the error message like a text
//     console.error(err);  // prints the error message in console like a error (not uncaught but caught error)
// })

//------------------------------------------------------------------

//Promise.race 
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"),3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 Success"),5000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P3 Fail"),2000);
// })

// //p3 is settled faster but also rejected  
//     //hence race gives the first settled promise and ignores all others 
// Promise.race([p1, p2, p3])
// .then((res) => {
//     console.log(res);     //output: P3 Fail
// })
// .catch((err) => {  //we do this to catch th error give a defined response or else uncaught error will display in console in browser(we catch the uncaught error)
//     // console.log(err);     // just prints the error message like a text
//     console.error(err);  // prints the error message in console like a error (not uncaught but caught error)
// })


//----------------------------------------------

//Promise.any 
    //gives us first resolved promise 
        //if al error then aggregation error 

// CASE1: atleast any one is resolved, then gets that  

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"),3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 Success"),5000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P3 Fail"),2000);
// })

// //p3 is settled faster but also rejected  
//     //hence race gives the first settled promise and ignores all others 
// Promise.any([p1, p2, p3])
// .then((res) => {
//     console.log(res);     //output: P1 Success -- even if p1 is only settled after p3 it is retrieved because latter p3 has failed 
// })
// .catch((err) => {  //we do this to catch th error give a defined response or else uncaught error will display in console in browser(we catch the uncaught error)
//     // console.log(err);     // just prints the error message like a text
//     console.error(err);  // prints the error message in console like a error (not uncaught but caught error)
// })

//------------------------------------------------------

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P1 Fail"),3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P2 Fail"),5000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P3 Fail"),2000);
})

//p3 is settled faster but also rejected  
    //hence race gives the first settled promise and ignores all others 
Promise.any([p1, p2, p3])
.then((res) => {
    console.log(res);     //output: [AggregateError: All promises were rejected] {
                                //     [errors]: [ 'P1 Fail', 'P2 Fail', 'P3 Fail' ]
                                //   }
})
.catch((err) => {  //we do this to catch th error give a defined response or else uncaught error will display in console in browser(we catch the uncaught error)
    // console.log(err);     // just prints the error message like a text
    console.error(err);  // prints the error message in console like a error (not uncaught but caught error)
    // console.log(err.errors); // used in browser if error of individual promises are not listed in aggregate error
})                                  // in case of node just logging 'err' brings both aggregate error with all the individual erros listed
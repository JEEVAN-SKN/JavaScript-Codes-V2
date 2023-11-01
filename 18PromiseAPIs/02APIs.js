//comment out and in each section to execute them individually

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




// same failure case in Promise.allSettled 

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"),3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P2 Fail"),5000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 Success"),2000);
})

//p2 is rejected 

// Promise.allSettled

Promise.allSettled([p1, p2, p3])
.then((res) => {
    console.log(res);     //output: [
                                //     { status: 'fulfilled', value: 'P1 Success' },
                                //     { status: 'rejected', reason: 'P2 Fail' },
                                //     { status: 'fulfilled', value: 'P3 Success' }
                                //   ]
})
.catch((err) => {  //we do this to catch th error give a defined response or else uncaught error will display in console in browser(we catch the uncaught error)
    // console.log(err);     // just prints the error message like a text
    console.error(err);  // prints the error message in console like a error (not uncaught but caught error)
})

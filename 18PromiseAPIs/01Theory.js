// We''ll discuss about the foru major Promise API's
    //(a) promise.all (b) promise.allSettled (c) promise.race (d) promise.any

//Promise terminologies : 
        // promise settled :  settled means it got response (either resolve or reject )

        //     reject(keyword) (or) rejected (or) failure(failed)
        //     resolve(keyword) (or) fulfilled (or) success
 

//A:: Promise.all()  - used to make multiple parallel api calls and get result at once
//   It takes a Iterable of promises as input (iterable refers to an array)
   promise.all([p1,p2,p3]); //let p1,p2,p3 take 3,2,5 secs each to resolve
//    SUCCESS case:    
            // then promise.all waits for whole 5 seconds till all get resolved and gives the result as an array of all 3 promises
                    //p2 gets resolved in 2s but promise.all waits for others to get resolved too and give collective result as an array

//    FAILURE case:   If any of the promise(let p2) fails, then it shows error of p2 and stops all processes( it wont even wait for other promises to get settled)
            // if p2 get rejected in 2s then all error shown and all other promises abandoned right away
    
    // Therefore it gives collective result only after waiting for all promise which should get resolved or else it shows the error of the first promise
    //                 which get rejected and stops the processes (it is kind of a failfast approach)

// B:: 
     promise.allSettled([p1,p2,p3]) //p1,p2,p3 -- 3,2,5 seconds
    //It doesnt care about success or failure, It waits for all promises to get settled and give their respective reject or resolve responses 
//     //If p2 success , then it moves forward and if p1 fail (promise.all would have ignore p2 success and only show p1 failure and doesnt wait for p3 to get settled)
            //but in case of promise.allSettled it waits for all to get settled and give all responses(resolve or reject) in an array
    //SUCCESS or FAILURE -- gives all responses 

// C:: 
    promise.race([p1,p2,p3])  //p1,p2,p3 -- 3,2,5 seconds
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

// We''ll discuss about the foru major Promise API's
    //(a) promise.all (b) promise.allSettled (c) promise.race (d) promise.any

//Promise terminologies : 
        // promise settled :  settled means it got response (either resolve or reject )

        //     reject(keyword) (or) rejected (or) failure(failed)
        //     resolve(keyword) (or) fulfilled (or) success
 

//A:: Promise.all()  - used to make multiple parallel api calls and get result at once
//   It takes a Iterable of promises as input (iterable refers to an array)
    Promise.all([p1,p2,p3]); //let p1,p2,p3 take 3,2,5 secs each to resolve
//    SUCCESS case:    
            // then promise.all waits for whole 5 seconds till all get resolved and gives the result as an array of all 3 promises
                    //p2 gets resolved in 2s but promise.all waits for others to get resolved too and give collective result as an array

//    FAILURE case:   If any of the promise(let p2) fails, then it shows error of p2 and stops all processes( it wont even wait for other promises to get settled)
            // if p2 get rejected in 2s then all error shown and all other promises abandoned right away
    
    // Therefore it gives collective result only after waiting for all promise which should get resolved or else it shows the error of the first promise
    //                 which get rejected and stops the processes (it is kind of a failfast approach)

// B::  promise.allSetted - same as promise.anu but gives even failure results so no one is skipped

    Promise.allSettled([p1,p2,p3]) //p1,p2,p3 -- 3,2,5 seconds  
// NOTE : Promise.allSettled is the safest version  of all promises to use in production

    //It doesnt care about success or failure, It waits for all promises to get settled and give their respective reject or resolve responses 
//     //If p2 success , then it moves forward and if p1 fail (promise.all would have ignore p2 success and only show p1 failure and doesnt wait for p3 to get settled)
            //but in case of promise.allSettled it waits for all to get settled and give all responses(resolve or reject) in an array
    //SUCCESS or FAILURE -- gives all responses 

// C:: Promise.race -- gives a single result of first settled promise(promise.allSettled but for only give one response which is first one to get settled
                                // all others are skipped )

    Promise.race([p1,p2,p3])  //p1,p2,p3 -- 3,2,5 seconds
        //It gives the result of the first settled promise out of all( it is a race scenario where the status of first one to get settled is provided with)
            //either reject or resolve it gives the result of the first settled promise 
                    //thereofore it takes in an iterable of promises and gives out a single response of the first settled promise 
        //SUCCESS or FAILURE -- gives single result of first settled promise 
                        //all other promises are not even waited for to get settled here as we already got a settled promise //


// D::  Promise.any ( same as promise.race but only wants successful response so if failure skips and goes to next)
                    // (if all failure gives array of failure of all rejected promises)
    Promise.any([p1,p2,p3])  //p1,p2,p3 --3,2,5 seconds

//  If p2 gets resolved in 2s then gives it as result but if it fails then waits for next p3 to get settled, if p3 resolved then gives p3 response
        // in case all fails then gives "aggregate error" which is an array of all the errors 
    
    //It is a single success seeking promise out of all given promises which waits for first success

// in next session we will implement and simulate these promise API's through code 
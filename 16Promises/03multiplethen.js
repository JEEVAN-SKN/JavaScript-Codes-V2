const p = new Promise(function (resolve,reject){
    setTimeout(()=>resolve("resolved"),5000)
})

function orier(){
console.log("heee");//we already leanrt about call stack, it will execute all sync exectuions first and only do async when call stacl is empty
    //so here all console.log's will be printed first ib console 

p.then((res)=> console.log(res))    //this promise will first do it's 1st .then and then fgo to next .then
.then((res)=>{setTimeout((res)=>console.log(res+"jhefre"),5000)}) //5 sec wait for 1st .then and again another 5 sec wait for 2nd .then
console.log("uybwfw");

p.then((res)=> console.log(res))  //but these .then are another usage of the promise p again 
console.log("jhbfjbf");
p.then((res)=> console.log(res))        //these 3 .then including first .then above execute simultaneousy
console.log("jhbfjbf");             //that is first all console logs will be 

}
orier()
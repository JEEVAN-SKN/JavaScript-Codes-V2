// we already know about setTimeouts through which we make a particular execution wait for some specified time
// but there is a common misunderstanding inthe working of setTimeout, lets dive deep into it

function x(){
    var i = 1;
    setTimeout(function (){
        console.log(i);
    }, 3000);
    console.log("");
}
x(); 
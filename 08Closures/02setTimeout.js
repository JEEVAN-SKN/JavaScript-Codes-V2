// we already know about setTimeouts through which we make a particular execution wait for some specified time
// but there is a common misunderstanding inthe working of setTimeout, lets dive deep into it

function x(){
    var i = 1;
    setTimeout(function (){  // this will execute after 3 seconds
        console.log(i);
    }, 1000);
    console.log("hi"); // this will execute first 
}
x(); // the above is due to the default asyncronous behaviour of js wiht the help of event loop 
    // which we had earlier discussed

// Now what if we need to print 1 to 6, which printed after a time interval equal to theri value 
    // normal coders will do the below
    function y() {
            for(var j=1;j<=6;j++){
                setTimeout(function () {
                    console.log(j);
                }, j * 1000)
            } }
    y()
  // from the above we would normally assume that thw ouptu will be from 1 to 6 each printed at intervals 1*1000, 2*2000 ,,1*6000 ie 1 to 6 seconds
  // but the output is 
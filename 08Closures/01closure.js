function hi(){
    var b = 10;
    function x(){
       var a = 7;
       console.log(b);
    }
    x();
}
hi(); // this will print out 7 as expected 
// this working, we have already learnt in scope chain and lexical scope
// this working is just because closure 
// all functions working we have been leanrning have been working due to closure 

// A Closure is basically a function combined with its lexical scope (its local memory and reference to parent scope lexical scope)

// form MDN docs closure is a combination of a function bundled together (enclosed) with referneces to its surrounding state(lexicale env)

// in above code iside browser console if u place debugger inside fuction x body in sources js script and play execution line by line 
  // u could see that in scope now has a) global scope b) local scope(current EC's scope) and Closure(hi) 
  // here closure of hi is the binding of current func x wih the lexical env of parent func hi

//Note that no matter how many inner function u are and how many Execution context deep u are in the call stack, 
// the scope wil have only one local scope which is the current Execution context u are in ryt now 
// when the inner funct is over , the EC gets eliminated and now local scope refers to the parent EC execution control line has returned to..
// Whenevr execution control is passed over to parent func EC , the eliminated Ec returns undefined if the function doesnt have a return command in it
 
// Flexibility of functions in Javascript 
  // we can assign functions to a variable 
    var b = function go(){

    }

  //we can pass functions as parameter for another function 

    x(function get(){
      console.log("helo");
    })

  // we can retunrn functions 

    function bool(){
      function bool(){
        var l = 34;
        console.log(l);
        } 
      return bool;
      }
    

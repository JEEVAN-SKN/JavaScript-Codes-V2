function hi(){
    var b = 10;
    // console.log(a); /// cannot do as parent doesnt have access to child scope 
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

   //we can pass functions as parameter for a variable 

   hi(function get(){console.log("helo");}) ;  // no sense of logic or use case here though just for knowledge of this way

   // we can return functions  
      function abc(){
        return function give(){
          console.log("hello buddy");
        }
      }
      var hi = abc(); //when abc() is executed it returns the func give() to the var hi 
      console.log(hi); // prints the fucntion give() body content

      // but what if we execute var hi as a function invokation like -> hi();
      // it executes the function which is its value 
      
      // here another aspect of closures into picture 
 
// lets discuus about closure in depth 
  // in the BELOW code we assign var e with function bool invocation 
  // that means when var e is assigned with the return value of func bool() after its execution 

   function bool(){
        var l = 34;
        return function boo(){ 
        console.log(l);
            } 
        
        }
      var e = bool(); //CODELINE : 1
    console.log(e); // It prints the function name and body in browser console
      e();// CODELINE : 2 -- here var l is not available as the all the EC's local memory is gone after CODELINE :1
      // but even though we get the value of var l printed in the console ?
    
    // here var e is assigned with the return value of function bool() but the return value is another function boo()
    // inside the scope of func bool() , func boo() gets access to parent bool()'s local variable and hence when func boo() is 
        // is executed it prints the value of var l in the console 

    //but here the execution of function bool() starts and ends within the CODELINE : 1 itself 
    // therefore after the line of assignment of var e is over , the whole Execution context of both bool() and boo() has eliminated ryt there 

    //but here in the browser consolethe value of l = 34 eventhough the local memory of the function's EC doesnt even exist
        // Here comes closure into picture 
        // when the function boo() was returned to as assignment value for the variable e , the function body with its lexical scope was also returned 
        // thereby from its lexical scope the variable l's value is remembered and is refered to when called outside eventhough execution context is nonexistent no more and thereby printed 
        //this binding of the function with its lexical scope when returned somehwere even though its execution context has been eliminated is done through the property of closures 

// another thing to note 
    // A]  // return function name(){}
    // B] //  function name(){} ; return name;        

      // both a and b are same, just different style of writing code 


// another important concept that poeple gets confused over closures is that 
// when function is returned in its closure it is not the real value of the variable that is returned but the reference to the variable in its scope

//let me show a usecasr
 function zolo(){
  var a = 100;
  function y(){
    console.log(a);
  }
  y();
  a = 1000;
  return y;
 }
  
 var ball = zolo(); // here the return value of func zolo is func y is assigned to ball (closured with func y's local scope)  
                              // and also the assignment is only after execution so value of a is printed as 100(due to y() invocation)
                              // but inside func zolo itslef after var a a in printed its value is changed....
 ball();// here var ball is executed hence func y is executed 
              // but what will be the value of var a now 100 or 1000?
              //most users think it will be 100 bcs assignment of 1000 is only after func y body and as var ball is only assigned with func y's body and closured before the assignment 
              // but the answer is 1000 
                  //explanation here val a's value is not stored when func y was closured bit just a reference and that refernce points the stored value in that scope 
                  // when the scope was ended value of var a has changed to 1000 so when we now refer var a thru closured scope 
                          // the value will show up as 1000;;
      // So thereby whenever a execution of a func is finished its Ec and scope is eliminated and garbage collected              
          // but  when the func is returned or refrenced, its closure creates a reference to it and hence they are not garbage collected
            // and if any variable is reassigned a new value within thar scope and whne called outside the reference only gives the last reassigned value before the scope was over 
            

                  



    

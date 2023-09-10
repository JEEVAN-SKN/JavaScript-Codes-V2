// lets take a small program and visualise how things happen in js exec context when the program is executed 

var n = 2;                                       //codeLine 1
function square(num){ //here num is a parameter  //codeLine 2
    var ans = num * num;                         //codeLine 3
    return ans;                                  //codeLine 4
}                                                //codeLine 5
var square2 = square(num); // here num is an argument( when used in func invocation(execution)) //codeLine 6
var square4 = square(4);                         //codeLine 7

// the execution context is created in 2 phases (memory component creation and the code execution phase(code component) )

// in memory phase js will scan thru whole code and allocate memory to all the variables and functions
// in code execution phase js will once again scan thru whole code and execute line by line 

// Js execution Process Visualisation 
        // for better understanding refer "02ExecutionContext/EXCONT.png"
// global context is created( memory and code component )
    
   //Global memory component 
     //js scans over each line of code and in memory component they are allocated and stored 
     // variables are intially allocated as undefined and function names are stored with func body
         //codeLine1 :-   // [a] n :- undefined 
         //codeLine2 :-   // [b] square :- {body of function including parameter is stored}
         //codeLine6 :-   // [c] square2 :- undefined 
         //codeLine7 :-   // [d] square4 :- undefined 

   //Global Code Component 
     // js scans over again and assigns value to undeifned variables and then when function hits up 
     //creates a new execution context inside global code component with its own memory and code component 
         //codeLine1 :-  // Assigns value to var n as "[a] n :- 2" in Global memory component content
         //codeLine 2-5 :- ignored as no execution or assignment code left here 
         //codeLine6 :-  //as function invocation is here (square(n)) new exec context is created (say EC1)
                    // Execution Context EC1 ( for the body code of func square)
                            //Memory Component (scans for var and func allocation)
                                    //codeLine2 :- [e] num :- undefined
                                    //codeLine3 :- [f] ans :- undefined 
                            //Code component (scans for exeution and value assignment)
                                    //codeLine2 :- asigns value to var num as "num :- 2" in EC1 memory component by refering global memory component
                                    //codeLine3 :- calculates num * num in code comp and changes code of var ans as "ans :- 4" in EC1 memory comp
                                    //codeLine4 :- return ans -- gives control over to EC1 creation causing codeLine6 
                                        // and also assigns ans value = 4 in global memory comp as "[c] square2 :- 4"
                                        // as now the func invocation resuting on EC1 and threby now atlast  after executing 
                                        // the last line of body code of func square , EC1 is deleted and comes back to Global exec context 
         //codeLine7 :- // as function invocation is here (square(4)) new exec context is created (say EC2)( with body code of func square to be scanned )
                            // same as EC1, EC2 is created and atlast at return statement control is given back to codeLine7 and square4 var assignment is 
                                // is done in global memory component 
        //AS last line of code is also executed the Global context is also deleted after that 

// THE CALL STACK (also known as Execution context stack, program stack, control stack, runtime stack, machine stack )
    // for better understanding  refer image "02ExecutionContext/Callstackpic.png"

    // here we notice every time a func invocation is reached a new exec context is created 
        // and there is possibility of internal context creation inside an already created context 
        // to manage all this in js, The Call Stack exists
        //CALL STACK is a stack that manages the creation, deletion and management of Execution Context 
            // When js prgrm is executed Global Execution Context is pushed into this call stack
                    // and new execution context(EC) are stacked upon this and when done execution it is popped out of the Call stack
                    // here when new EC is in top of stack it takes over execution control  and when it is popped 
                        // control goes back to previous Stack or EC creation causing code containing Context.. 

    // *Thereby Call Stack maintains the order of execution of execution contexts*

// also note that in memory phase variables are stored as undefined 
// "undefined" is a spacial place holder for variable's allocated space till it is assigned with a value)

//therefore "undefined" and "not defined" are 2 different things in js (not defines - when a variable doesnt even exist)

// js is a loosely typed lang(or)weakly typed lang because wit doesnt attach its variables to any datatype(flexibiity of datatype, can change datatype anytime we want)

// and even though we can assign "var a = undefined" it has no specific purpose hence not recommended to use 
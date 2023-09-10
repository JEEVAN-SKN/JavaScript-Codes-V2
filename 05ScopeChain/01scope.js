// lets understand scope, lexical environment and scope chain 

//scope basicaly means the area where we can access a specifc variable or function

function a(){ // when this function is executed its own execution context is created and first EC checks for var b in its local scope(memory component)
    console.log(b);// when not found in its own EC then its checks in Global EC's memory component and prints it
    var d = 67; 
 // therefore even if a variable is not found in its own function scope , it checks for it in its parent scope 
    // here the parent scope is the global scope(global EC's memory component)
    function c(){
        console.log(d);
    }
    c();
}
var b = 10;
a();
// c(); // but when i try to execute func c it says not defined because we are now out of the scope(EC) where func c was declared 
// here when we invoke func c , js checks it in global scope where func c is not defined 

// therefore here scope is like parent child environent where child can inherit from parent but parent cannot use childs specific contents
// in other words whatever var or func you use must be present in current scope(EC) or Parent Scope(EC)

// lexical refers to heirarchy (or) in sequence in code scopes 
// in above code we can say func c is lexically inside the func a as func c is declared inside the scope{} of func a 
// i.e func a is lexical parent of func c

//Scope is js is directly related to lexical environment 
// wherever a execution context is created a lexical environment is also created 
// Lexical environment of an EC is its own local memory in addition to referencre to the lexical environment of the parent 

// **lexical environment of EC = local memory of EC + lexical environment of parent EC**

// whenever a execution context is created , the memory component contains its own local memory and reference to the parent Ec's lexical environment(memory comp)
// as there is no parent for the Global EC its reference to the parent lexical environemnt is null

// whenever there is a need of a variable content in a child EC , js engine first check in its own local memory and if not found then refers to parent Ec's lexical environment and so on
// until it reaches Global Ec's lexical environment , even when not found in Global Ec's memory component it proceeds to Global Ec's parent reference which is null
// as Global Ec's parent reference is null , hence the variable or func is output as not defined in console
// For visual understanding check out image : "05ScopeChain/ScopeChain.png"

// **Therefore this process of chaining in between lexical environment and references of outer parent scope is called the "Scope Chain"**

// You can explore more in Browser console sources area by inserting a debugger inbetwee the code lines
// where u can click on each child EC and  check out it Scope section where it contains 1)its own local memory + 2) lexical envi of parent EC 


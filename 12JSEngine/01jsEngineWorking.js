    // js can be applied almost anywhere, it canbe run in browser, server, smartwatch, lightbulb, robots and many more  
        //this is possible due to javascript runtime environment 
                //js runtime is like a container which has all the things to run javascript code
                    // js Runtime basically contains a)Js Engine(call stack)
                                                  // b) WebAPI
                                                  // c)event loop
                                                  // d) callback queue 
                                                  // e) microtask queue

            //all javascript execution in browser happens through this runtime environment 
        //Node js has its own runtime environment which helps to run js in servers
    //node js runtime and browser runtime has many similarities and dissimilarities 

        //refer picture "12JSEngine/Js runtime.png" for representation of js runtime environment

// Now lets discuss the working of js engine 
        //there are a lot of js engines out there like chakra(micorsoft edge), Spidermonkey(firefox), V8(chrome, node.js, Deno, v8.net)
            //most important protocol of a js engine is to follow the ECMA script standards 
                        //ECMA is like the governing body of js langauge
            //The first js engine was created with js itself (Netscape), it has evolved a lot and now it is "spidermonkey" of mozilla firefox

//Architecture of js engine
        //Eventhough we refer as engine it is just a program wriiten in low level languages(eg V8 of chrome written in c++)
            //A js engine just takes high level lang(js code) as input and converts it to machine level code which can be executed 
                        //ALl these box diagram is just representation for understanding 
    
//JS engine archtecture 
    //Steps of execution :- 1) js code input -> 2) Parsing -> 3)Compilation -> 4) Execution

        // Parsing  (Refer picture "12JSEngine/Parsing.png")
            // given code broken down into tokens, it has syntax parser which turns code into AST(abstract syntax code)
            // for AST code structure refer picture "12JSEngine/AST.png"
            //U can look upon astexplorer.net for getting AST for any js code u type in 

        //Compilation : 
            //Now the AST is passed on to compilation phase
                //Initially js was interpreted language for browsers purpose but nowadasy js engines use both compiler and interpreter for optimisation
                //Whether js is interpreted or compiled is dependent on the js engine(either pure interpretation or JIT compilation)
                    //JIT stands for "Just in time" compilation, it is capability of js engines to use bith compiler as well as interpreter getting best of both worlds

            //Compilation and execution goes hand-in-hand
                    //js interpreter interpets code and coberts it into bytecode which moves to exectuin phase
                            //while interpreting it takes help form compiler to optimise the code  
                                    //these interpretation and compiltion may be done in single phase or multiple phases 
                                    //it alsocontain several algorithms to potimise the code
                            //as it optimises the code while interpreting(runtime) hence it is called just-in-time compilation
                                    //in some engines there is aot(Ahead of time)compilation -- compiles code which is to be executed soon in advance optimistically
                     // Compiler also does some other optimisation through methods like Inlining, Inline Caching, Copy elision


            //Execution 
                // with the machine code js engine executes with help of heap memory(for memory assigning) and call stack for execution and garbage collector
                    //Garbage collector uses a algorithm named Mark & Sweep algorithm which is also widely used in other applications

        //So the js Runtime Environment has jsengine, webapi, eventloop, Callback and job queue
                    //the Js engine has phases like Parsing, compilation, execution as mentioned above 
                            // and also contains the call stack, memory heap, memory heap
                                    //refer picture "12JSEngine/Js engine.png" for representation

    // All the mechanism we have talked about is very generic and each js engine would have is own unique mechanism but more or like we discussed above
        //The Compilation logic or optimisation between chome's V8 maybe totally differnet than mozilla's spidermonkey

// V8 engine
    //Every js browser tries to create a js engine which is the fastest
            //But as of now Google Chrome's V8 is th fastest js engine 
                //It has interpreter named "Ignitor"
                //It's optimising compiler is named "Turbofan"
                // Their garbage collector is named "Orinoco" which uses the Mark&Sweep algo
                        // and also another garbage collector named "Oilpan" for another purpose
                
                    //Refer V8 engine's architecture in picture "12JSEngine/V8.png"
    

                

        

    

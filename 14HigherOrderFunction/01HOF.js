// Higher order functions - a function which takes another function as argument or returns a functions 
    //example:-
        function x() {   //x() is the callback function 
            console.log("Javascript");
        }
        function y(x){  //y() is the higher order function 
            x();
        }
        y(x)

//functional programming
        //thinking the logic in terms of functions
        //it is creating the code logic into small reusable components (functions)
            //it helps in code reusability, modularity
    
//lets see the normal code and functional programming 
    //code for calculating properties of circle using it radius 
        
//normal code
        const radius = [3,1,4,6];  //array containing radius of circles 

        const calculateArea = function(radius){   //area calculation
            const output = []
            for(i=0;i<radius.length;i++){
                output.push(Math.floor(Math.PI * radius[i] * radius[i]))
            }
            return output
        }
        console.log(calculateArea(radius));

        const calculateCircumference = function(radius){   //circumference calculation
            const output = []
            for(i=0;i<radius.length;i++){
                output.push(Math.floor(2 * Math.PI * radius[i]))
            }
            return output
        }
        console.log(calculateCircumference(radius));

        const calculateDiameter = function(radius) { //Diameter calculation 
            const output = []
            for(i=0;i<radius.length;i++){
                output.push(2 * radius[i])
            }
            return output
        }
        console.log(calculateDiameter(radius));
        
        //in the above code we have to created a function for each calculation but all function body is same except for the formula
        //this is not a optimised code

//In programming there is a "DRY" principle - "Dont Repeat yourself"

    //in order to reduce reptiton here we can create a a functional component for the logic 
            //and separate function for each formula and use it as a callback function inside the logic 

        const area = function(radius){
            return Math.floor(Math.PI * radius * radius)
        }  

        const circumference = function(radius) {
            return Math.floor(2 * Math.PI * radius)
        }

        const diameter = function(radius) {
            return 2 * radius
        }

        const calculate = function(radius,formula){  //the basic array traversing logic
            const output = []
            for(i=0;i<radius.length;i++){
                output.push(formula(radius[i]))
            }
            return output
        }

        console.log(calculate(radius,area))   //calculate is the higher order function 
        console.log(calculate(radius,circumference)) //area, circumference, diameter is the callback function (argument and return)
        console.log(calculate(radius,diameter))    

                    //this is the optimised code based on functional programming approacg
                        //where we created a reusable component (funtions)
                    //It gives the same output as the first code 

        // in interview this style of code will be expected .
        
            

        



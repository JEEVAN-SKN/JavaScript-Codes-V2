// map() function is used to transform every element of an array

    // for eg 
        const arr = [5,1,3,2,6]
    
    //transformation could be anything like the following   
        //Double - [10,2,6,4,12]
        //Triple - [15,3,9,6,18]
        //Binary - ["101","1",11","10,"110"]

//function for doubling

    function double(x) {
        return  2 * x
    }

const output1 = arr.map(double)

console.log(output1);  //[10,2,6,4,12]


//function for tripling

    function triple(x) {
        return 3 * x
    }

const output2 = arr.map(triple)

console.log(output2);  //[15,3,9,6,18]


//function for binary numbers

    function binary(x) {
       return  x.toString(2)
    }

const output3 = arr.map(binary)

console.log(output3);  //["101","1",11","10,"110"]


//the above code can also be written by creating function while assignment or anonymous function or even arrow function(with or without return keyword)

//A)//internal function definition in assignment 
const output4 = arr.map( function binary(x) {
    return x.toString(2)
})
console.log(output4);

//B)//anonymous function
const output5 = arr.map(function (x) {
    return x.toString(2)
})
console.log(output5);

//C)//arrow functions style
    //i)// arrow function
    const output6 = arr.map((x) => {
        return x.toString(2)
    })
    console.log(output6);
    
    //ii)//arrow function without retunrn keyword as only single line of code 
    const output7 = arr.map((x) => x.toString(2))
    console.log(output7);
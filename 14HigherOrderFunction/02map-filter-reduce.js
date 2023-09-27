//map(), filter(), reduce() are the commonly used higher order functions in js, let's discuss about them today

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
console.log(output4); //["101","1",11","10,"110"]

//B)//anonymous function
const output5 = arr.map(function (x) {
    return x.toString(2)
})
console.log(output5); //["101","1",11","10,"110"]

//C)//arrow functions style

    //i)// arrow function
    const output6 = arr.map((x) => {
        return x.toString(2)
    })
    console.log(output6); //["101","1",11","10,"110"]
    
    //ii)//arrow function without return keyword as only single line of code 
    const output7 = arr.map(x=> x.toString(2))
    console.log(output7); //["101","1",11","10,"110"]

//filter() - used to filter an array according to given condition (If logically true that value is output and if false just ignores)

  //filter out odd values from array
     function isOdd(x){
        console.log(x%2)   // 1 1 1 0 0 
         return x % 2    //gives false (0 remainder) if x divisible by 2(even), true (1 remainder) if not divisible(odd)
     }  
     const output8 = arr.filter(isOdd)
     console.log(output8); //[ 5, 1, 3 ]

        //arrow function way
    const output9 = arr.filter( x => x % 2)
    console.log(output9);  //[ 5, 1, 3 ]

  //filter out even values from an array

      const out1 = arr.filter(x => x % 2 ===0)
      console.log(out1);  //[ 2, 6 ]
    

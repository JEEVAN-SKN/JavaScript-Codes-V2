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

  //filter out numbers greater than 3
     const out2 = arr.filter(x=>x>4)
     console.log(out2); //[5, 6]

//reduce()  - does some operation with all elements of array and comes  up with a single element output(it can be a single word,value,object ...)
            // in map we get transformed version of what is iterated over(if itrate list then we get list)( if array then we get transformed array)
            // in filter we get the filtered version of same element(array or list) we iterat over 
//ex: to find sum 

    //normal approach for 

    function findSum(arr) {
        let sum = 0;
        for(i=0;i<arr.length;i++){
            sum += arr[i];
        }
        return sum
    }
    console.log(findSum(arr));  // 17
    
    //reduce() approach

    const sum = arr.reduce(function (acc,curr){   //curr is the value of each iteration over given array or list(etc)(can have any name)
        acc += curr                                  // acc is the output we need , it is intially assigned a value or whatever we want
        return acc                                                         //and later assigned with what we need as output
    },0)        //acc should be initiated here after a comma (same structure of setTimeout but here initial assignment not timer)
    console.log(sum);  // 17 same output as above normal approach
    
//eg - maximum (greatest number of array

    // normal approach

    const maxNum = x => {
        let max = 0;
        for(i=0;i<arr.length;i++){
            if(max<arr[i]) max = arr[i] 
        }
        return max
    }
    console.log(maxNum(arr));  // 6  //greatest number of array "arr"

    //reduce() approach

    const max = arr.reduce( (max,curr) => {
        if(max<curr) max=curr
        return max
    },0) 
    console.log(max);  //6 // gives same output 

//extra example for higher order functions
    const users = [
        { firstname: "akshay", lastname: "saini", age: 26 },
        { firstname: "donald", lastname: "trump", age: 75},
        { firstname: "elon", lastname: "musk", age: 50},
        { firstname: "jeevan", lastname: "S K N", age: 20},
        { firstname: "subramanian", lastname: "thugperfect", age: 20}
    ]

//Q1) print out the list of fullnames (firstname, lastname)
        //in this case map() function can be used 

    const fullName = users.map( x => x.firstname +' '+ x.lastname) 
    console.log(fullName);      //here in function return we didnt put list [] but still the fullnames came in list
                //becoz map just modifies anything given to it, here we put "firstname + + lastname" hence each objects of list changed into fullname
        // output: 
                //[
                // 'akshay saini',
                // 'donald trump',
                // 'elon musk',
                // 'jeevan S K N',
                // 'subramanian thugperfect'
                // ]

//Q2) print the the unique ages and their number of occurences in the list "users" like { 26:1, 75:1, 50:1, 20:2 }
         //for reference    // const users = [
                            //     { firstname: "akshay", lastname: "saini", age: 26 },
                            //     { firstname: "donald", lastname: "trump", age: 75},
                            //     { firstname: "elon", lastname: "musk", age: 50},
                            //     { firstname: "jeevan", lastname: "S K N", age: 20},
                            //     { firstname: "subramanian", lastname: "thugperfect", age: 20}
                            // ]

        //here we need an object which contains key-value pairs where key is unique age and value is the no. of occurences  
            // we iterate over a  list "users" but we need a total different thing  (not transformed or filtered version of the given element to iterate over)
                    //hence we use reduce here to get the output we want
                        //we will initiate acc(any name) argument(first argument) with an empty object so that we fill it during iteration

        const uniqAge = users.reduce( (acc,curr) => {
            if(acc[curr.age]){        //this works when there already exists a key named as the current iteration age
                acc[curr.age] = ++acc[curr.age]     //it just increments the existing key's value 
            }
            else{             //thos condition works first bcos the object acc is empty at first 
                acc[curr.age] = 1  //curr.age i the age and if the age doesnt exist already then creates one key with the age as name and the value intitated to 1
            }
            return acc
        }, {} )  //{} bcs we need an object
        console.log(uniqAge);   // we get an object with key as unique age and value as the no. of occurences



//Q3) get the firstname of all the people who's age is less than 30

        //to segregrate people below age 30 we can use filter()
                //users.filter((x)=> x.age < 30)

        //to get firstnames of those filtered people we can use map() over filter()
            //advantage of higher order func: we can chain them one on another

                const ageBel30 = users.filter((x)=> x.age < 30).map((x)=> x.firstname)
                console.log(ageBel30);  //here we chain map() over filter()
                    // output: [ 'akshay', 'jeevan', 'subramanian' ]
                

        //the above can be done with reduce() too like below

                const ageBel = users.reduce((acc,curr)=>{
                    if(curr.age < 30){
                        acc.push(curr.firstname)
                    }
                    return acc       
                }, [])   // [] for creating an empty array
                console.log(ageBel); // output: [ 'akshay', 'jeevan', 'subramanian' ]
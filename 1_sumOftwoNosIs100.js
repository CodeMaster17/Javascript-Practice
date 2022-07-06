// question:  Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100


// i used this logic
// but we cannot go with this method because initially we dont know about the nos
    // if((num1 == 100) || (num2 == 100)){
    //     console.log("one of the nos is 100");
    // }
    // if( num1 + num2 == 100)
    // {
    //     console.log("The sum of two numbers is 100");
    // }


// solution

console.log("javscript ran");
const isNumber100 = (a,b) =>{
   return a === 100 && b === 100;

}


console.log(isNumber100(100,0));
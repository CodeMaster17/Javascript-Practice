// Write a JavaScript program to find the number of even digits in a an array of integers

let arr = [2,34,5,6,68,7,9,8];

const isEven = function(x){
    return x % 2 === 0
}
console.log( arr.filter(isEven));

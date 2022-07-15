// Write a JavaScript program to find the number of even values up to a given number in an array
var range = 0;
const arr = [432,346,3561,134,896,3,789032,4532,2];
console.log("program started");
function noOfeven(arr){
    console.log("program in function");
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 === 0)
        range++;
        // console.log(range);
    }
    return range;

}
var value = (noOfeven(arr));
console.log(value);
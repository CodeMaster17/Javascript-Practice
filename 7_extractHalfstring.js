// Write a JavaScript program to extract the first half of a string of even length.
const extracthalfString = (str) =>{
    let len = str.length;
    newStr = str.substr(0 , len/2);
    console.log(newStr);
}
extracthalfString("Harshi");

// sbse bdi cheez- variables lene ki zroort hi ni h behncho
const extract = (str) => str.slice(0, str.length /2);
console.log(extract("bkchod"))
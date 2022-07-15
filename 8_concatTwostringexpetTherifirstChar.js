// Write a JavaScript program to concatenate two strings except their first character.
const concatNaYrr = (str) =>{
    newStr = str.substr(1, str.length -1);
    newStr = newStr.concat(str);
    console.log(newStr);
}   
concatNaYrr("Virat");

// sirji ka method
const concatKrdoBhaii = (str1, str2) =>{
  return  str1.slice(1) + str2.slice(1);    
}
console.log(concatKrdoBhaii("AHars","ahit"));
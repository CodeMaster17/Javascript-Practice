// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more, if not, the original string is returned.
const addLast3chars = (str) =>{
    if(str.length > 4){

        let newStr1 = str.substr(str.length-3, 3);
       let newStr2 = str.substr(0,3);
         let finalStr = newStr1.concat(newStr2);
        // let proStr = finalStr.concat(newStr);
        console.log(finalStr);
    }
    else{
        console.log("the string only has 3 characters");
    }
    }
addLast3chars("Harshit");



//  another way of doin the same question is perofroming ternary operation
// variable = condition ? (true):(false);
const lastFirst3 = (str) =>
    str.length<3 ? str : str.slice(0,3) + str.slice(-3) 

console.log(lastFirst3("valueski"));

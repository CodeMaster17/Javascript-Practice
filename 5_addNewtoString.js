// Exercise 5: Write a JavaScript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.

const addNew = (str)=>{
    let index = str.indexOf(" ");
    let firstWord = str.substr(0,index);
    if (firstWord === "New!"){
        console.log(str);
    }
    else{

        let St1= "New!"
        let newStr = St1.concat(str);
        console.log(newStr);
    }
}
addNew("New! Harshit  yadav")
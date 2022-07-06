const getFileName = (str) =>{
    let index = str.lastIndexOf(".");
    let newStr = str.substr(index+1, str.length-1);
    return newStr;
}
console.log(getFileName("index.js"));
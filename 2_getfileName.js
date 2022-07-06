// Write a JavaScript exercise to get the extension of a filename.

console.log("javascript file ran");
const getFileExtension = (fileName) =>{
    return fileName.slice(fileName.lastIndexOf('.'));
}

console.log(getFileExtension("index.html"));
console.log(getFileExtension("webpack.config.js"));
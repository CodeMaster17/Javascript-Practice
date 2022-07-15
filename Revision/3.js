const replaceChar = (str) =>{
    for(let i = 0 ; i < str.length ; i++){
        let char = str.substr(i,1);
        let code = char.charCodeAt(0);
        // console.log(code);
        code++;
        }
}
console.log(replaceChar("Harshit"));
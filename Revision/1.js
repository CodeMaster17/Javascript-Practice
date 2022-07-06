const chk = (a, b) =>{
    if(a === 100 || b === 100 || (a+b)===100)
    return true;

    else
    return false;
}
let result = chk(100,3);
console.log(result);
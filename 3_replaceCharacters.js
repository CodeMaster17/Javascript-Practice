// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

const movecharsForward = (str) =>{
    c[] = str.split(' ');
    c.map(char => String.fromCharCode(charCodeAt(0)+1)).join(' ');
}
console.log(movecharsForward("harshit"));
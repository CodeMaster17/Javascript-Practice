const Count =( str)=>{
    for(let i =0; i<str.length; i++){
        let counter = 0;
        let c = str.substr(i,1);
        for( let j=0 ; j<str.length; j++)
        {
            if(c === str.substr(j,1)){
                counter++;
            }
        }
        console.log("The character", c ,"is present" , counter ,"times");
   }
}
Count("Harshita");
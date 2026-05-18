function pyramid (char,count,isRevarse){
 let row = [];
 for(let i = 0; i <= count ; i++){
    let space = " ".repeat(count -i);
    let addChar = char.repeat(2*i - 1);
    if(isRevarse === true){
         row.push(space)
    }else{
        row.unshift(space)
    }
 }
 return "\n" + rows.join("\n") + "\n";
}
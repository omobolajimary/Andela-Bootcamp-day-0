
"use strict"
module.exports={
    
getPrime: (n)=>{
  var arr = [];
  if(n < 1){
      return undefined
  }
  if(typeof n !== "number"){
        return 'undefined';
    }
  for (var counter = 0; counter <= n; counter++){
    for (var i = 2; i <= counter; i++){
      if(counter === i){
        arr.push(i);
      }
      if(counter % i === 0){
        break;
      }
    }
  }
  return arr;
}
}


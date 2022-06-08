// Code your solutions in this file
function writeCards(names,event){
    const messageCollection=[];
  for(let i=0;i<names.length;i++){     
      let message=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messageCollection.push(message);
  }
    return messageCollection;
}
function countDown(n){
    while(n>=0){
        console.log(n);
        n-=1;
    }
}
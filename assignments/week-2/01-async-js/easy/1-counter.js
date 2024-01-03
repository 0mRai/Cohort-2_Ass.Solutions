// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
let sec=1;
var id=setInterval(function(){
   console.log("ram ram "+sec);
   sec++;
   if(sec==109)
   {
    clearInterval(id);
   }
}, 1000);
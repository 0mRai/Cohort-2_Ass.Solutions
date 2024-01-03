// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


// setTimeout(function(){
// var i=0
// console.log(i);
// i++;
// setTimeout(function(){
// console.log(i);
// i++;
// setTimeout(function(){
//     console.log(i);
// },1000);
// }, 1000);
// },1000);


var i=0;
setTimeout(function r(){
  console.log(i);
  i++;
  if(i<100){
    setTimeout(r,1000);
  }
},1000);



































































// (Hint: setTimeout)
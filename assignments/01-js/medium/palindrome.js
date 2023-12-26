/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let arr=str.split(" ").join("").toUpperCase();  
  for(let i=0; i<arr.length/2; i++)
  {
    // if(arr.charAt(i)=="."||arr.charAt(i)==","||arr.charAt(i)=="!"||arr.charAt(i)=="?"||arr.charAt(arr.length-1-i)=="."||arr.charAt(arr.length-1-i)==","||arr.charAt(arr.length-1-i)=="!"||arr.charAt(arr.length-1-i)=="?")
    // {
    //   continue;
    // }
    if(arr[i]!=arr[arr.length-1-i])
    {
       return false;
    }
  }
  return true;
}

module.exports = isPalindrome;

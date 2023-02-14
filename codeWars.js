//Remove the spaces from the string, then return the resultant string.

// 1. Cannot use trim() this only removes spaces either side of string "   xxxxx    " ==> "xxxxx"

// 2. Created a function where you use the method replaceAll '  ' spaces with no space ''

function noSpace(x){
    const allSpacesRemoved = x.replaceAll(' ', '');
    return allSpacesRemoved;
  
  }

console.log(noSpace('What is going on here  ?'));
//
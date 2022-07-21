/*Write a function named first_non_repeating_letter that takes a string input,
 and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', 
since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, 
but the function should return the correct case for the initial letter.
 For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

*/



function firstNonRepeatingLetter(s) {
    // Add your code here
    let mp = new Map();
    for(let i=0;i<s.length;i++){
        let lowerLetter = s[i].toLowerCase();
        let upperLetter = s[i].toUpperCase();
        let count = 0
         count = mp.get(lowerLetter)
           if(count === undefined){
             count = mp.get(upperLetter)
              if(count === undefined){
                 mp.set(s[i],1)
               } else{
                 count++;
                mp.set(upperLetter,count)
             }
           }
          else{
            count++;
            mp.set(lowerLetter,count)
          }                 
    }
     for( [key,value] of mp){
        if(value === 1){
          return key
        }
     }
    return ""
     
  }
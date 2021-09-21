/*
Description:

Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby
Don't worry about uppercase vowels.
*/

// solution 1
function shortcut(string){
    const vowels = /[aeiou]+/g;
    return string.replace(vowels, "");
}
  
// solution 2
function shortcut(string){
    return string.replace(/[aeiou]+/g, "");
}
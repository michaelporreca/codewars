/*
Directions:

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

// Solution:
function cleanString(s) {
    // create a variable using parameter s
      let str = s
    
    for (let i = 0; i < s.length-1; i += 1) {
      // create a variable that returns the index of #
      const idx = str.indexOf('#');
      // create a variable that splits the string and rejoins them
      const splitStr = str.split(str.slice(idx-1, idx+1)).join('');
      
      if (idx === 0) {
        // use subtring method to return only letters
        str = str.substring(1, );
        
        // if statement replacing # with an empty string
        if (str === '#') {
          return ''
        }
      } else {
        // performs the split and join variable created earlier
        str = splitStr;
      }
    }
    // return the created variable
    return str
  }
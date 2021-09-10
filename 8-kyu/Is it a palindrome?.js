/*
Description:

Write function that checks if a given string (case insensitive) is a palindrome.
*/

// Solution
function isPalindrome(x) {
    let string = x.toLowerCase()
    let reverseVersion = x.split("").reverse().join("").toLowerCase()
    if (string === reverseVersion) {
      return true
    } else {
      return false
    }
  }
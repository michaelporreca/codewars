/*
Description:

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

// Solution:
function highAndLow(numbers) {
    // Split array into a new array with strings
    const arr = numbers.split(" ")
    // Create max and min number
    let maxNum = arr[0]
    let minNum = arr[0]

    // Create for loop to run in new array
    for(let num of arr) {
        // If num is larger than maxNum
        if(Number(num) > maxNum) {
            maxNum = num
        }

        // If num is less than maxNum
        if(Number(num) < minNum) {
            minNum = num
        }
    }
    // Return maxNum and minNum
    return maxNum + " " + minNum
}
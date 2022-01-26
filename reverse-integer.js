/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

Constraints:

-231 <= x <= 231 - 1
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // check if negative
    const negative = x < 0 && "-";

    // create array from number
    const array = Array.from(x.toString()).map(Number);

    // reverse array and parse into an integer
    const num = parseInt(array.reverse().join(""));

    // if greater than the max 32bit integer return 0
    if (num > 2147483647) return 0;

    return parseInt(negative + num);
};

console.log(reverse(-123));
/*
console.log(reverse_(120));
console.log(reverse_(123));
console.log(reverse_(789));
*/

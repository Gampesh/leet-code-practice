/*
https://leetcode.com/problems/palindrome-number

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.


Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


Constraints:

-231 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {boolean}
 */
// Solution-1
var isPalindrome = function(x) {
    let str = x.toString().trim();
    return (str == str.split('').reverse().join(''));
}

// Solution-2
/*

var isPalindrome = function(x) {
    Short circuit
    if(x < 0 || (x !== 0 && x % 10 == 0))
        return false;

    let reverse = 0;

    while (x > reverse) {
        reverse = reverse * 10 + x % 10;
        x = ~~(x/10);
    }

    return x === reverse || x === ~~(reverse/10);
};
*/
console.log(isPalindrome(121)); // logs 'true'
console.log(isPalindrome(-121)); // logs 'false'
console.log(isPalindrome(10));  // logs 'false'

/*
https://leetcode.com/problems/longest-palindromic-substring/
Given a string s, return the longest palindromic substring in s.



Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"


Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    var longest = '', c;
    for (c=0; c<s.length; c++) {
        if ((s.length-c)*2 <= longest.length) break;  // exit early if remaining can't surpass largest found

        longest = scanOutward(s, longest, c, c);   // odd length "ata"
        longest = scanOutward(s, longest, c+1, c); // even length "atta"
    }
    return longest;
};

function scanOutward(s, longest, left, right) {
    if (left > 0 && right < s.length && s[left-1] === s[right+1]) {
        return scanOutward(s, longest, left-1, right+1);
    } else {
        return (right-left+1 >= longest.length) ? s.substring(left, right+1) : longest;
    }
}

// console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
/*
cbbd
dbbc // reverse of above string

babad
dabab
*/

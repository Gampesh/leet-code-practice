/**
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

 "123456789"
 "987654321"

**/

/**

 * @param {string} num1
 * @param {string} num2
 * @return {string}

 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

    if (num1 == '0' || num2 == '0') { return '0'; }

    let product = new Array(num1.length + num2.length);
    product.fill(0);
    let pos = product.length - 1;

    function productRes(number1, number2) {
        return number1*number2;
    }

    function getCurry(product) {
        return Math.floor(product/10);
    }

    for (let i = num1.length - 1; i >= 0; i--) {
        let tempPos = pos;
        for (let j = num2.length - 1; j >= 0; j--) {
            product[tempPos] += productRes(num1[i],num2[j]);
            product[tempPos-1] += getCurry(product[tempPos]); // carry
            product[tempPos] %= 10;
            tempPos -= 1;
        }
        pos -= 1;
    }

    return product.join("").replace(/^0+/, "");
};

console.log(multiply("5432","3124"));
//console.log(multiply("2", "3"));
//console.log(multiply("123", "456"));
// console.log(multiply("123456789", "987654321"));
// console.log(multiply("9", "99"));
// console.log(multiply("99", "9"));

window.addEventListener('digitalData-event-updated', function(){
    if (/form/i.test(digitalData.event[0].eventInfo.eventType)) {
        console.log(digitalData.event.length, digitalData.event[0].eventInfo.eventName, digitalData.event[0].eventInfo.eventType);
    }
})

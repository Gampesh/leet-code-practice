/*
https://leetcode.com/problems/add-two-numbers

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
L1 2
L2 5
current ListNode { val: 7, next: null }
L1 4
L2 6
current ListNode { val: 0, next: null }
L1 3
L2 4
current ListNode { val: 8, next: null }
*/

var addTwoNumbers = function(l1, l2) {

    let sum = 0;
    let current = new ListNode(0);
    let result = current;

    while(l1 || l2) {

        if(l1) {
            //console.log("L1", l1.val);
            sum += l1.val;
            l1 = l1.next;
        }


        if(l2) {
            //console.log("L2", l2.val);
            sum += l2.val;
            l2 = l2.next;
        }

        current.next = new ListNode(sum % 10);
        current = current.next;
        //console.log("current", current);
        sum = sum > 9 ? 1 : 0;
    }

    if(sum) {
        //console.log("inside sum if", current);
        current.next = new ListNode(sum);
    }
    //console.log(result.next);
    return result.next;
};

function ListNode(val) {
    // console.log(val);
     this.val = val;
     this.next = null;
}


let firstInput = {val: 2,  next: { val: 4, next: { val: 3, next: null } } };
let secondInput = {val: 5,  next: { val: 6, next: { val: 4, next: null } } };
//let firstInput = {val: 5,  next:null};
//let secondInput = {val: 5,  next:null};

addTwoNumbers(firstInput, secondInput);

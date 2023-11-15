/**
 * 1290. 二进制链表转整数
 * https://leetcode.cn/problems/convert-binary-number-in-a-linked-list-to-integer/
 */



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 52ms  94.96%
 * 40.19mb  10.08%
 */
var getDecimalValue = function (head) {

    const arr = []

    while (head) {
        arr.push(head.val)
        head = head.next
    }

    return parseInt(arr.join(''), 2)

};
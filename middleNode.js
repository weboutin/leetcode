/**
 * 876. 链表的中间结点
 * https://leetcode.cn/problems/middle-of-the-linked-list/
 */




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 64ms  41.98%
 * 40.35mb  5.19%
 */
var middleNode = function (head) {

    const arr = []

    while (head) {

        arr.push(head)

        head = head.next
    }

    const len = arr.length

    return arr[ parseInt(len / 2)]


};
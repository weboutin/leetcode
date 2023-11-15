/**
 * 141. 环形链表
 * https://leetcode.cn/problems/linked-list-cycle/submissions/
 *

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 72 ms
 * 44.8 MB
 */
var hasCycle = function (head) {
    const s = new WeakSet()
    while (head != null) {
        if (s.has(head)) {
            return true
        }
        s.add(head)
        head = head.next
    }
    return false
};
/**
 * 160. 相交链表
 * https://leetcode.cn/problems/intersection-of-two-linked-lists/
 */

/**
 * 872ms  5.02%
 * 48.2MB  77.94%
 * 时间复杂度是 O(m*n) m,n 分别是 headA 和 headB的长度
 */
var getIntersectionNode = function (headA, headB) {
    while (headA != null) {
        let pointerB = headB
        while (pointerB != null) {
            if (headA == pointerB) {
                return headA
            }
            pointerB = pointerB.next
        }
        headA = headA.next
    }
};
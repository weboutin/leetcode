/**
 * 203. 移除链表元素
 * https://leetcode.cn/problems/remove-linked-list-elements/
 */

/**
 * 72ms  84.01%
 * 46.4MB  5.116%
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeElements = function (head, val) {
    if (head == null) return head

    head.next = removeElements(head.next, val)
    return head.val == val ? head.next : head
};



let head = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))))
// 
let result = removeElements(head, 6)


let arr = []
while (result != null) {
    arr.push(result.val)
    result = result.next
}
console.log(arr)
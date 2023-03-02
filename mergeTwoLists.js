/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}



let list1 = (function () {
    const four = new ListNode(4)
    const two = new ListNode(2, four)
    const one = new ListNode(1, two)
    return one
})()

let list2 = (function () {
    const four = new ListNode(4)
    const three = new ListNode(3, four)
    const one = new ListNode(1, three)
    return one
})()

/**
 * 64 ms
 * 43.2 MB
 */
var mergeTwoLists = function (list1, list2) {
    const newHead = new ListNode()
    let point = newHead
    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            point.next = list1
            point = point.next
            list1 = list1.next
        } else {
            point.next = list2
            point = point.next
            list2 = list2.next
        }
    }
    if (list1 != null) {
        point.next = list1
    }
    if (list2 != null) {
        point.next = list2
    }
    return newHead.next

};

let result = mergeTwoLists(head)

console.log('result ---- ')

while (result != null) {
    console.log(result.val)
    result = result.next
}
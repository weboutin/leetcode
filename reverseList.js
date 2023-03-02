
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

const arr = [1, 2, 3, 4, 5]

// const five = new ListNode(5)
// const four = new ListNode(4)
// const four = new ListNode(4, five)
const three = new ListNode(3)
// const three = new ListNode(3, four)
// const two = new ListNode(2)
const two = new ListNode(2, three)
const one = new ListNode(1, two)
let head = one


/**
 * 68ms
 * 43.4MB
 */

var reverseList = function (head) {
    if (!head || !head?.next) {
        return head
    }
    let newHead = []
    const node = func(head, newHead)
    head.next = null
    return newHead[0]
};

function func(node, newHead) {
    if (node.next == null) {
        newHead[0] = node
        return node
    }
    func(node.next, newHead).next = node
    return node
}

let newHead = reverseList(head)

console.log('result ---- ')

while (newHead != null) {
    console.log(newHead.val)
    newHead = newHead.next
}
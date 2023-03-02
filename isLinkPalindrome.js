/**
 * @param {ListNode} head
 * @return {boolean}
 */


// 可以反转链表，然后再逐个比较
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const arr = [1, 2, 3, 4, 5]

//
// const five = new ListNode(5)
const four = new ListNode(1)
// const three = new ListNode(0)
const three = new ListNode(2, four)
const two = new ListNode(2, three)
// const one = new ListNode(1)
const one = new ListNode(0, two)
let head = one


/**
 * 168 ms
 * 67.5 MB
 */
var isPalindrome = function (head) {
    let len = 0
    let point = head
    while (point != null) {
        len++
        point = point.next
    }
    if (len == 1) {
        return true
    }
    const stack = []
    for (let i = 0; i < Math.floor(len / 2); i++) {
        stack.push(head)
        head = head.next
    }
    if ((len / 2).toString().indexOf('.5') != -1) {
        head = head.next
    }
    if (stack.length == 1) {
        return stack[0].val == head.val
    }
    for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].val != head.val) {
            return false
        }
        head = head.next
    }
    return true
};

const result = isPalindrome(head)
console.log(result)

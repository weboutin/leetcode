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

//
// const five = new ListNode(5)
// const four = new ListNode(4, five)
const three = new ListNode(3)
// const three = new ListNode(3, four)
const two = new ListNode(2, three)
// const one = new ListNode(1)
const one = new ListNode(1, two)
let head = one

/**
 * 56 ms
 * 41.7MB
 */
var removeNthFromEnd = function (head, n) {
    if (head.next == null && n == 1) {
        return head.next
    }
    const node = _fn(head, n)
    if (n != 1) {
        node.val = node.next.val
        node.next = node.next.next
    }
    return head
};

function _fn(node, n) {
    if (node?.next?.next == null && n == 1) {
        return node.next = null
    }
    if (node.next == null) {
        return 1
    }
    const num = _fn(node.next, n)
    if (typeof num != 'number') {
        return num
    }
    if (num + 1 == n) {
        return node
    }
    return num + 1
}


/**
 * 68 ms
 * 41.7 MB
 */
var removeNthFromEnd = function (head, n) {
    let position = getPosition(head, n)
    //移除头节点
    if (n == position) {
        return head.next
    }
    return head
};

function getPosition(node, n) {
    if (node == null) {
        return 0
    }
    let position = getPosition(node.next, n) + 1
    if (position == n + 1) {
        node.next = node.next.next
    }
    return position
}


/**
 * 52 ms
 * 41.6 MB
 */
var removeNthFromEnd = function (head, n) {
    // 要删除的节点的前一个位置的编号
    const prev = getNodeLen(head) - n
    if (prev == 0) {
        return head.next
    }
    let node = head

    for (let i = 1; i < prev; i++) {
        node = node.next
    }
    node.next = node.next.next

    return head
};

function getNodeLen(head) {
    let len = 0
    while (head != null) {
        head = head.next
        len++
    }
    return len
}

var removeNthFromEnd = function (head, n) {
    // 要删除的节点的前一个位置的编号
    const prev = getNodeLen(head) - n
    if (prev == 0) {
        return head.next
    }
    let node = head

    for (let i = 1; i < prev; i++) {
        node = node.next
    }
    node.next = node.next.next

    return head
};


/**
 * 60 ms
 * 41.7 MB
 */
var removeNthFromEnd = function (head, n) {
    let fast = head
    let slow = head
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    if (fast == null) {
        return head.next
    }

    while (fast.next != null) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next
    return head

}


let result = removeNthFromEnd(head, 2)

console.log('result ---- ')
while (result != null) {
    console.log(result.val)
    result = result.next
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let point = head;
  while (point.next != null) {
    if (point.val == point.next.val) {
      point.next = point.next.next;
    } else {
      point = point.next;
    }
  }
  return head;
};

let head = {
  next: null,
  val: 1
}

head.next = {
  val: 1,
  next: {
    val: 2,
    next: 3
  }
}

let rs = deleteDuplicates(head)
console.log(rs)
/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/submissions/ 
 */

var mergeTwoLists = function(l1, l2) {
  let point={val:null,next:null};
  let result = point;
  while(l1 && l2) {
    if (l1.val < l2.val) {
      point.next = l1,
      l1 = l1.next;
      point = point.next;
    } else {
      point.next = l2,
      l2 = l2.next;
      point = point.next;
    }
  }
  if (l1) {
    point.next = l1;
  }

  if (l2) {
    point.next = l2;
  }

  return result.next;
};
/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/submissions/ 
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let move = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        if (move > 0) {
          nums.splice(i + 1, move);
        }
        move = 0;
        break;
      }
      move++;
    }
    if (move > 0) {
      nums.splice(i + 1, move);
    }
  }
  return nums.length;
};

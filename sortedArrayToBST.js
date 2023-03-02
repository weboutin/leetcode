/**
 * 将有序数组转换为二叉搜索树
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xninbt/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * 68 ms 84.16%
 * 43.2 MB 93.53%
 */
var sortedArrayToBST = function (nums) {
    return helper(nums)
};

function helper(nums) {
    if (nums.length == 0) return null
    let mid = Math.floor(nums.length / 2)
    let root = new TreeNode(nums[mid])
    if (mid == 0) {
        return root
    }
    root.left = helper(nums.slice(0, mid))
    root.right = helper(nums.slice(mid + 1, nums.length))
    return root
}

nums = [-10, -3, 0, 5, 9]

const result = sortedArrayToBST(nums)

console.log(result)
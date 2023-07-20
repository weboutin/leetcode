/**
 * 2236. 判断根结点是否等于子结点之和
 * https://leetcode.cn/problems/root-equals-sum-of-children/
 */



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 56ms  91.60%
 * 41.5MB  73.28%
 */
var checkTree = function (root) {

    return root.val == root.left.val + root.right.val

};
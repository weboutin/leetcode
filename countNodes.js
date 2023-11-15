/**
 * 222. 完全二叉树的节点个数
 * https://leetcode.cn/problems/count-complete-tree-nodes/
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
 * 80ms  93.62%
 * 58.62mb  49.12%
 */
var countNodes = function (root) {
    if (!root) return 0
    return countNodes(root?.left) + countNodes(root?.right) + 1
};
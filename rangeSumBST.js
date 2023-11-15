/**
 * 938. 二叉搜索树的范围和
 * https://leetcode.cn/problems/range-sum-of-bst/description/
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
 * 176ms  93.81%
 * 70.31mb  87.61%
 */
var rangeSumBST = function (root, low, high) {


    function helper(node) {
        if (!node) return 0

        if (node.val >= low && node.val <= high) {
            return helper(node.left) + helper(node.right) + node.val
        }
        if (node.val < low) {
            return helper(node.right)
        }

        if (node.val >= high) {
            return helper(node.left)
        }

        return 0

    }

    return helper(root)


};
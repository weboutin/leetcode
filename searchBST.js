/**
 * 700. 二叉搜索树中的搜索
 * https://leetcode.cn/problems/search-in-a-binary-search-tree/
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
 * 76ms  71.29%
 * 47.09mb  87.02%
 */
var searchBST = function (root, val) {

    if (root == null) {
        return null
    }

    if (root.val == val) {
        return root
    }

    if (root.val > val) {
        return searchBST(root.left, val)
    } else {
        return searchBST(root.right, val)
    }

};
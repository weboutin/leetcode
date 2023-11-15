/**
 * 543. 二叉树的直径
 * https://leetcode.cn/problems/diameter-of-binary-tree/?envType=list&envId=bxbmnec
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
 * 112ms  5.29%
 * 44.01mb  8.70%
 */
var diameterOfBinaryTree = function (root) {


    function maxDepth(node) {
        return node == null ? 0 : Math.max(maxDepth(node.left), maxDepth(node.right)) + 1
    }

    let max = -1


    function helper(node) {

        if (node.left) helper(node.left)
        if (node.right) helper(node.right)

        max = Math.max(max, maxDepth(node.left) + maxDepth(node.right))


    }

    helper(root)


    return max

};
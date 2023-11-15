/**
 * 617. 合并二叉树
 * https://leetcode.cn/problems/merge-two-binary-trees/
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
 * 88ms  89.02%
 * 47.67mb  66.84%
 */
var mergeTrees = function (root1, root2) {

    if (!root2) return root1

    if (!root1) return root2


    const merged = new TreeNode(root1.val + root2.val)

    merged.left = mergeTrees(root1.left, root2.left)
    merged.right = mergeTrees(root1.right, root2.right)

    return merged

};
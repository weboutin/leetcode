/**
 * 257. 二叉树的所有路径
 * https://leetcode.cn/problems/binary-tree-paths/
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
 * 60ms  83.665%
 * 43MB  5.13%
 */
var binaryTreePaths = function (root) {

    let globalResult = []

    helper(root, [])

    function helper(root, result) {
        if (root.left == null && root.right == null) {
            return globalResult.push(result.concat([root.val]).join('->'))
        }
        result = result.concat([root.val])
        if (root.left) {
            helper(root.left, result)
        }
        if (root.right) {
            helper(root.right, result)
        }
    }


    return globalResult
};



/**
 * 404. 左叶子之和
 * https://leetcode.cn/problems/sum-of-left-leaves/
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
 * 56ms  96.01%
 * 43.1MB  78.05%
 */
var sumOfLeftLeaves = function (root) {

    if (root.left == null && root.right == null) {
        return 0
    }

    let sum = 0;
    function helper(root) {
        if (root.left == null && root.right == null) {
            return root.val
        }
        if (root.left) {
            let rs = helper(root.left)
            if (rs) sum += rs
        }
        if (root.right) {
            helper(root.right)
        }
    }
    helper(root)
    return sum

};



/**
 * 64ms  69.95%
 * 43MB  82.28%
 */
var sumOfLeftLeaves = function (root) {

    if (!root) return 0

    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right) + (
        root.left != null && root.left.left == null && root.left.right == null ? root.left.val : 0
    )
};



/**
 * 112. 路径总和
 * https://leetcode.cn/problems/path-sum/
 */


/**
 * 76ms  28.94%
 * 44.1MB  89.41%
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false

    if (root.left == null && root.right == null && root.val == targetSum) {
        return true
    }

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

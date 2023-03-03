/**
 * 270. 最接近的二叉搜索树值
 * https://leetcode.cn/problems/closest-binary-search-tree-value/
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
 * 64ms  82.35%
 * 44.2MB  52.94%
 */
var closestValue = function (root, target) {
    let minClose = null
    let maxClose = null

    while (root != null) {
        if (target > root.val) {
            minClose = root.val
            root = root.right
        } else {
            maxClose = root.val
            root = root.left
        }
    }
    if (minClose == null) return maxClose
    if (maxClose == null) return minClose

    return (maxClose - target) > (target - minClose) ? minClose : maxClose
};


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

root = new TreeNode(1, null, new TreeNode(2))


closestValue(root, 3.428)
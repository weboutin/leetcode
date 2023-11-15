/**
 * 530. 二叉搜索树的最小绝对差
 * https://leetcode.cn/problems/minimum-absolute-difference-in-bst/
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
 * 164ms  5.01%
 * 49.00mb  5.02%
 */
var getMinimumDifference = function (root) {
    let min = Number.MAX_VALUE

    let pre = null

    function helper(node) {

        if (node.left) {
            helper(node.left)
        }

        if (pre == null) {
            pre = node.val
        } else {
            min = Math.min(min, node.val - pre)
            pre = node.val
        }

        console.log(node.val)

        if (node.right) {
            helper(node.right)
        }
    }

    helper(root)

    return min


};


// [236,104,701,null,227,null,911]
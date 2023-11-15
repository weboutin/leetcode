/**
 * 559. N 叉树的最大深度
 * https://leetcode.cn/problems/maximum-depth-of-n-ary-tree/description/
 */




/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {


    if (!root) return 0
    if (!root.left && !root.right) return 1

    let max = 0

    for (let i = 0; i < root.children.length; i++) {

        max = Math.max(maxDepth(root.children[i]) + 1, max)

    }

    return max

};
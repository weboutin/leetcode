/**
 * 589. N 叉树的前序遍历
 * https://leetcode.cn/problems/n-ary-tree-preorder-traversal/
 */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 76ms  79.35%
 * 42.85mb  81.16%
 */
var preorder = function (root) {
    const result = []

    function helper(node) {
        if (!node) return
        result.push(node.val)
        for (let i = 0; i < node?.children?.length; i++) {
            helper(node.children[i])
        }
    }

    helper(root)


    return result


};
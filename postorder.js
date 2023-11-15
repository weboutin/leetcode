/**
 * 590. N 叉树的后序遍历
 * https://leetcode.cn/problems/n-ary-tree-postorder-traversal/
 */



/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 76ms  77.88%
 * 42.60mb  95.58%
 */
var postorder = function (root) {

    const result = []

    function helper(node) {
        if (!node) return
        for (let i = 0; i < node?.children?.length; i++) {
            helper(node.children[i])
        }
        result.push(node.val)
    }

    helper(root)


    return result



};
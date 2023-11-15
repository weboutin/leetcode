/**
 * 1469. 寻找所有的独生节点
 * https://leetcode.cn/problems/find-all-the-lonely-nodes/
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
 * 84ms  33.33%
 * 44.68mb  23.81%
 */
var getLonelyNodes = function (root) {

    const result = []


    function helper(node) {
        if (!node) return

        if (node.left && !node.right) {
            result.push(node.left.val)
        }

        if (!node.left && node.right) {
            result.push(node.right.val)
        }

        helper(node.left)
        helper(node.right)

    }

    helper(root)


    return result

};
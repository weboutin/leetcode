/**
 * 637. 二叉树的层平均值
 * https://leetcode.cn/problems/average-of-levels-in-binary-tree/
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {

    const result = []

    let queue = [root]
    let childQueue = []
    let parentQueue = []

    while (queue.length != 0) {

        const node = queue.pop()
        parentQueue.push(node)

        if (node.left) childQueue.push(node.left)
        if (node.right) childQueue.push(node.right)

        if (queue.length == 0) {
            const sum = parentQueue.reduce((a, b) => a + b)
            result.push(sum / parentQueue.length)
            queue = childQueue
            parentQueue = []
        }
    }

    return result

};
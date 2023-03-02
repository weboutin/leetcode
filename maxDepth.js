/**
 * 二叉树的最大深度
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnd69e/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const fifteen = new TreeNode(15)
const seven = new TreeNode(7)
const nine = new TreeNode(9)
const twenty = new TreeNode(20, fifteen, seven)
const three = new TreeNode(3, nine, twenty)

const root = three
/**
 * 一次就解出来了！
 * 72 ms 36.98%
 * 43.6 MB 90.04%
 */
var maxDepth = function (root) {
    if (root === null) return 0
    if (root.left == null && root.right == null) {
        return 1
    }
    let max = Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1)
    return max
};

/**
 * 660ms 93.10%
 * 43.6 MB 88.27%
 */
var maxDepth = function (root) {
    return root == null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};


const result = maxDepth(root)

console.log(result)

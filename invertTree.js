/**
 * 226. 翻转二叉树
 * https://leetcode.cn/problems/invert-binary-tree/
 */



/**
 * 56ms  88.56%
 * 41.4MB  34.44%
 */
var invertTree = function (root) {
    if (!root) {
        return null
    }
    let tmp = root.right
    root.right = root.left
    root.left = tmp

    invertTree(root.left)

    invertTree(root.right)

    return root
};


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


root = new TreeNode(2, new TreeNode(1), new TreeNode(3))

s = invertTree(root)
console.log(s)
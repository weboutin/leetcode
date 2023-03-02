/**
 * 94. 二叉树的中序遍历
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/
 */



function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}



/**
 * 60 ms 65.45%
 * 41MB 93.80%
 */
var inorderTraversal = function (root) {
    let result = []
    _helper(root, result)
    return result
};

function _helper(root, result) {
    if (!root) return
    _helper(root.left, result)
    result.push(root.val)
    _helper(root.right, result)
}


let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))


const result = inorderTraversal(root)

console.log(result)
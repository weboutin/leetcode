/**
 * 110. 平衡二叉树
 * https://leetcode.cn/problems/balanced-binary-tree/
 */



function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


/**
 * 72ms  66.08%
 * 46.5MB  22.76%
 */
var isBalanced = function (root) {
    if (root == null) return true
    if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) return false
    return isBalanced(root?.left) && isBalanced(root?.right)
};


function maxDepth(root) {
    return root == null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};


[1, 2, 2, 3, null, null, 3, 4, null, null, 4]


root = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4))), new TreeNode(2, null, new TreeNode(3, null, new TreeNode(3))))



root = new TreeNode(3,
    new TreeNode(9, null, null),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
)



let result = isBalanced(root)
console.log(result)
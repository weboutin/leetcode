/**
 * 对称二叉树
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn7ihv/
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
// const fifteen = new TreeNode(15)
// const seven = new TreeNode(7)
// // const eight = new TreeNode(8)
// // const nine = new TreeNode(9, eight)
// const nine = new TreeNode(9)
// const twenty = new TreeNode(20, fifteen, seven)
// const three = new TreeNode(3, nine, twenty)

const root = new TreeNode(1, new TreeNode(2, new TreeNode(2), null), new TreeNode(2, new TreeNode(2), null))


/**
 * 72 ms 42.37%
 * 43.6 MB 67.83%
 */
var isSymmetric = function (root) {
    if (!root) return true
    return helper(root.left, root.right)
}

function helper(left, right) {
    if (left == null && right == null) {
        return true
    }
    if (left?.val != right?.val) {
        return false
    }
    return helper(left.left, right.right) && helper(left.right, right.left)
}

const result = isSymmetric(root)
console.log(result)

// console.log(result)

/**
 * 前序遍历 中左右
 * 中序遍历 左中右
 * 后序遍历 左右中
 * 区别在于 “中” 放在前/中/后三个位置
 */
// 
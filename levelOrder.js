/**
 * 二叉树的层序遍历
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnldjj/
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


root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
// console.log(root)


/**
 * 72ms 24.32%
 * 43.1 MB 52.00%
 */
var levelOrder = function (root) {
    if (!root) return []
    let result = []

    let queue = [root]

    while (queue.length != 0) {
        let subResult = []
        let len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            subResult.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        result.push(subResult)
    }
    return result
};


const result = levelOrder(root)

console.log(result)

/**
 * 前序遍历 中左右
 * 中序遍历 左中右
 * 后序遍历 左右中
 * 区别在于 “中” 放在前/中/后三个位置
 */
// function show(node) {
//     if (!node) {
//         return
//     }
//     console.log(node.val)
//     if (node.left) {
//         show(node.left)
//     }
//     if (node.right) {
//         show(node.right)
//     }


// }

// show(root)

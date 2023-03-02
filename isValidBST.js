
/**
 * 验证二擦搜索树
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn08xg/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(5, new TreeNode(1, null, null), new TreeNode(4, new TreeNode(3), new TreeNode(6)))

/**
 * 72 ms 50.75 %
 * 46.2 MB 5.75%
 */
var isValidBST = function (root) {
    let result = []
    helper(root, result)
    for (let i = 0; i < result.length - 1; i++) {
        if (result[i] >= result[i + 1]) {
            return false
        }
    }
    console.log(result)
    return true
};

function helper(root, result) {
    if (!root) {
        return
    }
    if (root.left) {
        helper(root.left, result)
    }
    result.push(root.val)
    if (root.right) {
        helper(root.right, result)
    }
}


const result = isValidBST(root)
console.log(result)

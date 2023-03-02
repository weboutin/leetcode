/**
 * 111. 二叉树的最小深度
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/
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
/**
 * 196ms  93.37%
 * 81.2MB  31.35%
 */
var minDepth = function (root) {
    if (!root) return 0
    return helper(root)
};


function helper(root) {
    if (!root) {
        return 100000
    }
    if (root.left == null && root.right == null) {
        return 1
    }
    return Math.min(helper(root.left), helper(root.right)) + 1
}


root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
)
root = new TreeNode(2,
    null,
    new TreeNode(3,
        null,
        new TreeNode(4,
            null,
            new TreeNode(5,
                null,
                new TreeNode(6))
        )
    )
)

let s = minDepth(root)
console.log(s)
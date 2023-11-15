/**
 * 501. 二叉搜索树中的众数
 * https://leetcode.cn/problems/find-mode-in-binary-search-tree/
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
 * 80ms  48.88%
 * 47.38mb  37.91%
 */
var findMode = function (root) {
    let map = {}

    function helper(node) {
        if (!node) return

        if (map[node.val] == undefined) {
            map[node.val] = 1
        } else {
            map[node.val]++
        }

        helper(node.left)
        helper(node.right)


    }

    helper(root)

    let maxCount = 0

    let result = []

    for (let key in map) {

        if (map[key] == maxCount) {
            result.push(key)
        }
        if (map[key] > maxCount) {
            maxCount = map[key]
            result = [key]
        }

    }

    return result


};
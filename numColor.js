/**
 * LCP 44. 开幕式焰火
 * https://leetcode.cn/problems/sZ59z6/
 */



/**
 * 76ms  51.11%
 * 44.84mb 86.67%
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var numColor = function (root) {

    const set = new Set()

    function helper(node) {

        set.add(node.val)

        if (node.left) helper(node.left)

        if (node.right) helper(node.right)

    }


    helper(root)

    return set.size

};

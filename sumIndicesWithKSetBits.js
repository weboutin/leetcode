/**
 * 2859. 计算 K 置位下标对应元素的和
 * https://leetcode.cn/problems/sum-of-values-at-indices-with-k-set-bits/description/
 */


/**
 * 72ms  67.24%
 * 42.41mb  45.40%
 */
var sumIndicesWithKSetBits = function (nums, k) {

    let sum = 0

    for (let i = 0; i < nums.length; i++) {

        const rs = nums[i].toString(2)

        let tmpSum = 0
        for (let j = 0; j < rs.length; j++) {
            if (rs[j] == '1') {
                tmpSum++
            }
        }
        if (tmpSum == k) sum += nums[i]

    }

    return sum

};
/**
 * 1822. 数组元素积的符号
 * https://leetcode.cn/problems/sign-of-the-product-of-an-array/
 */



/**
 * 60ms  69.93%
 * 41.3MB  78.43%
 */
var arraySign = function (nums) {

    let minusCount = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            return 0
        }
        if (nums[i] < 0) {
            minusCount++
        }
    }

    return minusCount % 2 == 0 ? 1 : -1

};
/**
 * 2778. 特殊元素平方和
 * https://leetcode.cn/problems/sum-of-squares-of-special-elements/
 */




/**
 * 72ms  100.00%
 * 42.10MB  100.00%
 */
var sumOfSquares = function (nums) {

    let sum = 0

    let n = nums.length


    for (let i = 1; i <= nums.length; i++) {
        if (n % i == 0) {
            sum += nums[i - 1] * nums[i - 1]
        }
    }

    return sum
};
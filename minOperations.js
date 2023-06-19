/**
 * 1827. 最少操作使数组递增
 * https://leetcode.cn/problems/minimum-operations-to-make-the-array-increasing/
 */



/**
 * 60ms  79.21%
 * 42.7MB  60.40%
 */
var minOperations = function (nums) {


    let prev = nums[0]
    let result = 0

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= prev) {
            prev = prev + 1
            result += prev - nums[i]
        } else {
            prev = nums[i]
        }

    }

    return result
};

nums = [1, 5, 2, 4, 1]
nums = [1,1,1]
ans = minOperations(nums)
console.log(ans)
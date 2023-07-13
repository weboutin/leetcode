/**
 * 2367. 算术三元组的数目
 * https://leetcode.cn/problems/number-of-arithmetic-triplets/
 */




/**
 * 84ms  11.24%
 * 41.2MB  44.33￥
 */
var arithmeticTriplets = function (nums, diff) {

    let count = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[k] - nums[j] == diff && nums[j] - nums[i] == diff) {
                    count++
                }

            }
        }
    }

    return count

};
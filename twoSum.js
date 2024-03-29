/**
 * 1. 两数之和
 * https://leetcode.cn/problems/two-sum/
 */

/**
 * time 92
 * mem 41.4
 * 双指针
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    };
}

/**
 * 56 ms
 * 41.6MB
 */
var twoSum = function (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        // if (map[nums[i]]) continue
        if (map[target - nums[i]] != undefined) {
            return [map[target - nums[i]], i]
        }
        map[nums[i]] = i
    }
}


// nums = [2, 7, 11, 15], target = 9

nums = [2,5,5,11]
target = 10



console.log(twoSum(nums, target))
/**
 * 两数之和
 * https://leetcode-cn.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(target - nums[i]) && map[target - nums[i]] != i) {
            return [i, map[target - nums[i]]];
        }
    }
    return [];
};
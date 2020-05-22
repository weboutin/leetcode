/**
 * 两数之和
 * https://leetcode-cn.com/problems/two-sum/
 */
//Map是数字一定要注意使用hasOwnProperty

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (!map.hasOwnProperty(nums[i])) {
            map[nums[i]] = i
        }
        if (map.hasOwnProperty(target - nums[i]) && map[target - nums[i]] != i) {
            return [i, map[target - nums[i]]];
        }
    }
    return [];
};

console.log(twoSum([3, 3], 6))

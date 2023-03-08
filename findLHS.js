/**
 * 594. 最长和谐子序列
 * https://leetcode.cn/problems/longest-harmonious-subsequence/
 */



/**
 * 116ms  50.00%
 * 51.1MB  18.32%
 */
var findLHS = function (nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] == undefined) {
            map[nums[i]] = 1
        } else {
            map[nums[i]]++
        }
    }
    let max = 0;
    for (let key in map) {
        if (map[Number(key) + 1] != undefined) {
            max = Math.max(map[Number(key) + 1] + map[key], max)
        }
    }

    return max
};

nums = [1, 3, 5, 7, 9, 11, 13, 15, 17]
nums = [1, 3, 2, 2, 5, 2, 3, 7]

s = findLHS(nums)
console.log(s)
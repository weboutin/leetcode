/**
 * 1133. 最大唯一数
 * https://leetcode.cn/problems/largest-unique-number/
 */


/**
 * 60ms  81.25%
 * 43.2MB  37.50%
 */
var largestUniqueNumber = function (nums) {

    const map = {}


    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] == undefined) {
            map[nums[i]] = 1
        } else {
            map[nums[i]]++
        }
    }
    let max = -1
    for (let key in map) {
        if (key > -1 && map[key] == 1) {
            max = key
        }

    }
    return max
};
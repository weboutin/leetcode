/**
 * 2206. 将数组划分成相等数对
 * https://leetcode.cn/problems/divide-array-into-equal-pairs/
 */



/**
 * 60ms  91.53%
 * 43.4MB  30.51%
 */
var divideArray = function (nums) {

    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] == undefined) {
            map[nums[i]] = 1
        } else {
            map[nums[i]]++
        }
    }

    let count = 0

    for (let key in map) {
        if (map[key] % 2 != 0) {
            return false
        }
        count += map[key] / 2
    }

    return count == (nums.length / 2)

};
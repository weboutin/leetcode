/**
 * 2154. 将找到的值乘以 2
 * https://leetcode.cn/problems/keep-multiplying-found-values-by-two/?envType=list&envId=bxbmnec
 */

/**
 * 60ms  76.74%
 * 43.3MB  5.81%
 */
var findFinalValue = function (nums, original) {

    let map = {}

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = 1
    }

    while (map[original] != undefined) {
        original = original * 2
    }


    return original

};
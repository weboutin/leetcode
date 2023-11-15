/**
 * 2089. 找出数组排序后的目标下标
 * https://leetcode.cn/problems/find-target-indices-after-sorting-array/
 */



/**
 * 72ms  38.78%
 * 41.19mb  75.51%
 */
var targetIndices = function (nums, target) {

    const result = []

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            result.push(i)
        }
        if (nums[i] > target) {
            break
        }

    }

    return result

};
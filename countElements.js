/**
 * 2148. 元素计数
 * https://leetcode.cn/problems/count-elements-with-strictly-smaller-and-greater-elements/?envType=list&envId=bxbmnec
 */


/**
 * 68ms  30.94%
 * 43.1MB 7.14%
 */
var countElements = function (nums) {

    nums.sort((a, b) => a - b)

    let map = {}

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] == undefined) {
            map[nums[i]] = 1
        } else {
            map[nums[i]]++
        }
    }


    const count = nums.length - map[nums[0]] - map[nums[nums.length - 1]]

    return count <= 0 ? 0 : count
};
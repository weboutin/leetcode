/**
 * 题目描述
 * 1748. 唯一元素的和
 * https://leetcode.cn/problems/sum-of-unique-elements/
 */



/**
 * 52ms  95.50%
 * 41.1MB  73.87%
 */
var sumOfUnique = function (nums) {

    let map = {}
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] == undefined) {
            map[nums[i]] = 1
        } else {
            map[nums[i]]++
        }
    }

    for (let key in map) {
        if (map[key] == 1) {
            sum += Number(key)
        }

    }
    return sum

};

nums = [1, 2, 3, 2]

ans = sumOfUnique(nums)
console.log(ans)
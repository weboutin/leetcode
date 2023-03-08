/**
 * 697. 数组的度
 * https://leetcode.cn/problems/degree-of-an-array/
 */


/**
 * 100ms  42.93%
 * 46.7MB  44.39%
 */
var findShortestSubArray = function (nums) {
    const map = {}
    let max = []
    let maxCount = 0
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] == undefined) {
            map[nums[i]] = {
                count: 1,
                firstIndex: i,
                lastIndex: i
            }
        } else {
            map[nums[i]].count++
            map[nums[i]].lastIndex = i
        }
        if (max.length == 0 || maxCount == map[nums[i]].count) {
            max.push(nums[i])
        } else if (maxCount < map[nums[i]].count) {
            maxCount = map[nums[i]].count
            max = [nums[i]]
        }
    }

    let ans = map[max[0]]

    for (let i = 1; i < max.length; i++) {
        if (map[max[i]].lastIndex - map[max[i]].firstIndex < ans.lastIndex - ans.firstIndex) {
            ans = map[max[i]]
        }
    }

    return (ans.lastIndex - ans.firstIndex) + 1
};


nums = [1, 2, 2, 3, 1]
nums = [1, 2, 2, 3, 1, 4, 2]

ans = findShortestSubArray(nums)
console.log(ans)
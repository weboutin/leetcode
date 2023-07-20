/**
 * 1636. 按照频率将数组升序排序
 * https://leetcode.cn/problems/sort-array-by-increasing-frequency/
 */



/**
 * 72ms  80.61%
 * 44.4MB 10.20%
 */
var frequencySort = function (nums) {
    const map = {}


    for (let i = 0; i < nums.length; i++) {

        if (map[nums[i]] == undefined) {
            map[nums[i]] = 1
        } else {
            map[nums[i]]++
        }
    }


    const sorted = []

    for (let num in map) {
        if (sorted[map[num]] == undefined) {
            sorted[map[num]] = [Number(num)]
        } else {
            sorted[map[num]].push(Number(num))
            sorted[map[num]].sort((a, b) => b - a)
        }
    }

    const result = []


    for (let i = 0; i < sorted.length; i++) {

        for (let j = 0; j < sorted[i]?.length; j++) {

            for (let m = 0; m < i; m++) {
                result.push(sorted[i][j])
            }


        }

    }


    return result
};

nums = [1, 1, 2, 2, 2, 3]


ans = frequencySort(nums)
console.log(ans)
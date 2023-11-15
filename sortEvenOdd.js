/**
 * 2164. 对奇偶下标分别排序
 * https://leetcode.cn/problems/sort-even-and-odd-indices-independently/
 */


/**
 * 68ms  87.50%
 * 43.5mb  17.50%
 */
var sortEvenOdd = function (nums) {

    const odd = []
    const even = []

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            even.push(nums[i])
        } else {
            odd.push(nums[i])
        }
    }

    const result = []

    odd.sort((a, b) => b - a)
    even.sort((a, b) => a - b)


    for (let i = 0; i < even.length; i++) {

        if (even[i]) {
            result[i * 2] = even[i]
        }
        if (odd[i]) {
            result[i * 2 + 1] = odd[i]
        }
    }

    return result

};

nums = [4, 1, 2, 3]


ans = sortEvenOdd(nums)
console.log(ans)
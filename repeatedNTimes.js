/**
 * 961. 在长度 2N 的数组中找出重复 N 次的元素
 * https://leetcode.cn/problems/n-repeated-element-in-size-2n-array/
 */



/**
 * 96ms  16.67
 * 43.87mb  37.50%
 */
var repeatedNTimes = function (nums) {

    nums.sort((a, b) => a - b)

    let count = 1

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] == nums[i - 1]) {
            count++
        } else {
            count = 1
        }

        if (count == (nums.length / 2)) {
            return nums[i]
        }

    }

};


nums = [9, 5, 3, 3]
nums = [1, 2, 3, 3]

ans = repeatedNTimes(nums)
console.log(ans)

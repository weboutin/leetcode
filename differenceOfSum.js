/**
 * 2535. 数组元素和与数字和的绝对差
 * https://leetcode.cn/problems/difference-between-element-sum-and-digit-sum-of-an-array/
 */



/**
 * 72ms  60.82%
 * 44.8MB 42.27%
 */
var differenceOfSum = function (nums) {

    let elementSum = 0

    let digitSum = 0

    for (let i = 0; i < nums.length; i++) {

        elementSum += nums[i]

        while (nums[i] > 0) {

            digitSum += nums[i] % 10

            nums[i] = parseInt(nums[i] / 10)

        }

    }

    return Math.abs(elementSum - digitSum)

};

nums = [1, 15, 6, 3]

ans = differenceOfSum(nums)
console.log(ans)
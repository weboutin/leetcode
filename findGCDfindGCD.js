/**
 * 1979. 找出数组的最大公约数
 * https://leetcode.cn/problems/find-greatest-common-divisor-of-array/
 */




/**
 * 68ms  47.75%
 * 42.6MB  27.03%
 */
var findGCD = function (nums) {

    nums = nums.sort((a, b) => a - b)
    let max = nums[nums.length - 1]
    let min = nums[0]


    for (let i = min; i > 0; i--) {
        if (max % i == 0 && min % i == 0) {
            return i
        }
    }
};


nums = [7, 5, 6, 8, 3]

ans = findGCD(nums)
console.log(ans)
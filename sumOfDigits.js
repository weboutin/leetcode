/**
 * 1085. 最小元素各数位之和
 * https://leetcode.cn/problems/sum-of-digits-in-the-minimum-number/?envType=list&envId=bxbmnec
 */



/**
 * 56ms  66.67%
 * 41.2MB  0.00%
 */
var sumOfDigits = function (nums) {
    nums.sort((a, b) => a - b)

    const s = nums[0].toString()

    let sum = 0
    for (let i = 0; i < s.length; i++) {
        sum += Number(s[i])
    }

    return sum % 2 == 0 ? 1 : 0


};
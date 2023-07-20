/**
 * 2553. 分割数组中数字的数位
 * https://leetcode.cn/problems/separate-the-digits-in-an-array/
 */


/**
 * 76ms  72.29%
 * 43.4MB  85.54%
 */
var separateDigits = function (nums) {

    const ans = []



    for (let i = 0; i < nums.length; i++) {

        const str = nums[i].toString()

        for (let j = 0; j < str.length; j++) {

            ans.push(Number(str[j]))

        }


    }


    return ans

};
/**
 * 2119. 反转两次的数字
 * https://leetcode.cn/problems/a-number-after-a-double-reversal/
 */



/**
 * 68ms  16.90%
 * 39.97MB  81.69%
 */
var isSameAfterReversals = function (num) {

    if (num == 0) return true

    if (/0$/.test(num.toString())) {
        return false
    }

    return true

};


num = 526


ans = isSameAfterReversals(num)
console.log(ans)
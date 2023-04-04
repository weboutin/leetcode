/**
 * 728. 自除数
 * https://leetcode.cn/problems/self-dividing-numbers/
 */


/**
 * 64ms  79.67%
 * 41.3MB  70.73%
 */
var selfDividingNumbers = function (left, right) {
    const ans = []

    for (let i = left; i <= right; i++) {

        if (helper(i)) {
            ans.push(i)
        }
    }
    return ans
};

function helper(num) {
    let loop = num
    while (loop > 0) {
        let key = loop % 10

        // 自然数不包含0
        if (key == 0) {
            return false
        }

        if (num % key != 0) {
            return false
        }

        loop = Math.floor(loop / 10)
    }
    return true
}

left = 1, right = 22

ans = selfDividingNumbers(left, right)


console.log(ans)

// helper(21)
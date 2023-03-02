/**
 * 202. 快乐数
 * https://leetcode.cn/problems/happy-number/
 */

/**
 * 64ms  76.10%
 * 41.1MBB  98.76%
 */
var isHappy = function (n) {
    let fast = n, slow = n
    do {
        fast = helper(fast)
        fast = helper(fast)
        slow = helper(slow)
    } while (fast != slow)
    return fast == 1
};

function helper(n) {
    let sum = 0
    while (n >= 1) {
        let item = parseInt(n) % 10
        sum += item * item
        n = n / 10
    }
    return sum
}

const result = isHappy(2)
// const result = isHappy(19)
// console.log(helper(100))

console.log(result)




/**
n=19
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 */
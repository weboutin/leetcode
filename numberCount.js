/**
 * 3032. 统计各位数字都不同的数字个数 II
 * https://leetcode.cn/problems/count-numbers-with-unique-digits-ii/
 */



/**
 * 90ms  100.00%
 * 55.80mb  100.00%
 */
var numberCount = function (a, b) {

    let count = 0

    for (let i = a; i <= b; i++) {
        if (check(i)) {
            count++
        }
    }

    return count


};

function check(num) {

    let set = new Set()
    let len = 0

    while (num > 0) {
        len++
        set.add(num % 10)
        num = parseInt(num / 10)
    }

    return len == set.size
}
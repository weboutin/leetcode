/**
 * 2269. 找到一个数字的 K 美丽值
 * https://leetcode.cn/problems/find-the-k-beauty-of-a-number/
 */



/**
 * 60ms  76.32%
 * 40.09mb  57.89%
 */
var divisorSubstrings = function (num, k) {

    const str = num.toString()

    let count = 0

    for (let i = 0; i < str.length - (k - 1); i++) {

        const tmp = str.slice(i, i + k)
        if (tmp == 0) {
            continue
        }

        if (num % Number(tmp) == 0) {
            count++
        }

    }

    return count

};

num = 240, k = 2

ans = divisorSubstrings(num, k)
console.log(ans)
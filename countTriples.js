/**
 * 1925. 统计平方和三元组的数目
 * https://leetcode.cn/problems/count-square-sum-triples/
 */


/**
 * 160ms  29.55%
 * 42.4MB  43.18%
 */
var countTriples = function (n) {
    let count = 0


    for (let i = 1; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            for (let k = j + 1; k <= n; k++) {
                if (i ** 2 + j ** 2 == k ** 2) {
                    count++
                }

            }
        }
    }


    return count * 2
};
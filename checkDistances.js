/**
 * 2399. 检查相同字母间的距离
 * https://leetcode.cn/problems/check-distances-between-same-letters/
 */



/**
 * 64ms  78.79%
 * 42.1MB  48.61%
 */
var checkDistances = function (s, distance) {

    for (let i = 0; i < s.length - 1; i++) {

        for (let j = i + 1; j < s.length; j++) {

            if (s[j] == s[i]) {
                if (distance[s[i].charCodeAt() - 97] != j - i - 1) {
                    return false
                }
            }
        }
    }
    return true
};


s = "abaccb", distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

s = "aa", distance = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

ans = checkDistances(s, distance)
console.log(ans)
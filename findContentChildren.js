/**
 * 455. 分发饼干
 * https://leetcode.cn/problems/assign-cookies/
 */

/**
 * 92ms  51.67%
 * 43.4MB  60.67%
 */
var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)

    let count = 0

    for (i = 0, j = 0; i < g.length && j < s.length; i++, j++) {

        while (j < s.length && s[j] < g[i]) {
            j++
        }

        if (s[j] >= g[i]) {
            count++
        }

    }
    return count
};
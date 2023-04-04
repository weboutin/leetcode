/**
 * 821. 字符的最短距离
 * https://leetcode.cn/problems/shortest-distance-to-a-character/
 */

/**
 * 68ms  80.43%
 * 42.9MB  61.70%
 */
var shortestToChar = function (s, c) {
    const result = [];

    for (let i = 0; i < s.length; i++) {
        let index = 0;
        while (1) {
            if (s[i + index] == c || s[i - index] == c) {
                result.push(index)
                break
            }
            index++;
        }

    }

    return result;
};


s = "loveleetcode", c = "e"

shortestToChar(s, c)
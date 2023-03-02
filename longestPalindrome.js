/**
 * 409. 最长回文串
 * https://leetcode.cn/problems/longest-palindrome/
 */



/**
 * 72ms  33.91%
 * 42.3MB  59.96%
 */
var longestPalindrome = function (s) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            map[s[i]]++
        }
    }

    let count = 0;

    let hasSingle = false

    for (let key in map) {
        if (map[key] % 2 == 0) {
            count += map[key]
        } else {
            hasSingle = true
            if ((map[key] - 1) % 2 == 0) {
                count += map[key] - 1
            }
        }

    }

    return hasSingle ? count + 1 : count


};



s = "abccccdd"

let result = longestPalindrome(s)

console.log(result)
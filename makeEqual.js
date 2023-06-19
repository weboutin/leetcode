/**
 * 1897. 重新分配字符使所有字符串都相等
 * https://leetcode.cn/problems/redistribute-characters-to-make-all-strings-equal/
 */




/**
 * 80ms  59.09%
 * 44.1MB  34.09%
 */
var makeEqual = function (words) {
    let map = {}
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (map[words[i][j]] == undefined) {
                map[words[i][j]] = 1
            } else {
                map[words[i][j]]++
            }
        }
    }

    for (let key in map) {

        if (map[key] % words.length != 0) {
            return false
        }

    }
    return true
};


words = ["abc", "aabc", "bc"]
words = ["ab", "a"]

// words = ["asdf"] // true
// words = ["b"] // true

ans = makeEqual(words)
console.log(ans)
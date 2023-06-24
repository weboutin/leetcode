/**
 * 953. 验证外星语词典
 * https://leetcode.cn/problems/verifying-an-alien-dictionary/?envType=list&envId=bxbmnec
 */


/**
 * 64ms  56.25%
 * 43.1MB  27.50%
 */
var isAlienSorted = function (words, order) {
    let map = {}

    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i
    }
    map[undefined] = -1

    function compareWord(word1, word2) {
        for (let i = 0; i < word1.length; i++) {
            if (map[word1[i]] > map[word2[i]]) {
                return false
            } else if (map[word1[i]] == map[word2[i]]) {
                continue
            } else {
                return true
            }
        }
        return true
    }

    for (let i = 1; i < words.length; i++) {
        if (!compareWord(words[i - 1], words[i])) {
            return false
        }
    }
    return true
};


words = ["apple", "app"], order = "abcdefghijklmnopqrstuvwxyz"
words = ["hello", "leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
words = ["word", "world"], order = "worldabcefghijkmnpqstuvxyz"



ans = isAlienSorted(words, order)
console.log(ans)
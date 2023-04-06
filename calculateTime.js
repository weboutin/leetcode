/**
 * 1165. 单行键盘
 * https://leetcode.cn/problems/single-row-keyboard/
 */


/**
 * 60ms  90.00%
 * 42.1MB  90.00%
 */
var calculateTime = function (keyboard, word) {
    let map = {}
    for (let i = 0; i < keyboard.length; i++) {
        map[keyboard[i]] = i
    }


    let count = map[word[0]]
    for (let i = 1; i < word.length; i++) {
        count += Math.abs(map[word[i]] - map[word[i - 1]])

    }
    return count

};


keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"

keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"

ans = calculateTime(keyboard, word)
console.log(ans)

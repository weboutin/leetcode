/**
 * 58. 最后一个单词的长度
 * https://leetcode.cn/problems/length-of-last-word/
 */




/**
 * 64ms  41.4%
 * 42.8MB  5.00%
 */
var lengthOfLastWord = function (s) {
    let stack = []
    let word = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            stack = []
        } else {
            stack.push(s[i])
            word = stack
        }
    }
    return word.length
};

s = "   fly me   to   the moon  "

const result = lengthOfLastWord(s)
console.log(result)
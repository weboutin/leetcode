/**
 * 500. 键盘行
 * https://leetcode.cn/problems/keyboard-row/
 */


/**
 * 60ms  65.36%
 * 40.9MB  62.57%
 */
var findWords = function (words) {
    const result = []
    const line = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
    for (let i = 0; i < words.length; i++) {
        let currentLine = ''
        let isMatch = true
        for (let m = 0; m < line.length; m++) {
            if (line[m].indexOf(words[i][0].toLocaleLowerCase()) != -1) {
                currentLine = line[m]
                break
            }
        }
        for (let j = 1; j < words[i].length; j++) {
            if (currentLine.indexOf(words[i][j].toLocaleLowerCase()) == -1) {
                isMatch = false
                break
            }
        }
        if (isMatch) result.push(words[i])
    }

    return result
};



words = ["Hello", "Alaska", "Dad", "Peace"]
words = ["zZxcvbnm"]

findWords(words)
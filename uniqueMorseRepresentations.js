/**
 * 804. 唯一摩尔斯密码词
 * https://leetcode.cn/problems/unique-morse-code-words/
 */


/**
 * 64ms  70.80%
 * 41.9MB  61.31%
 */
var uniqueMorseRepresentations = function (words) {
    const s = new Set();
    const morseGroup = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

    for (let i = 0; i < words.length; i++) {
        let morseStr = ''
        for (let j = 0; j < words[i].length; j++) {
            morseStr += morseGroup[words[i][j].charCodeAt() - 97]
        }
        s.add(morseStr)
    }

    return s.size;
};


words = ["gin", "zen", "gig", "msg"]



uniqueMorseRepresentations(words)
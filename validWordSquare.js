/**
 * 422. 有效的单词方块
 * https://leetcode.cn/problems/valid-word-square/
 */



/**
 * 80ms  19.05%
 * 47MB  19.05%
 */
var validWordSquare = function (words) {

    for (let i = 0; i < words.length; i++) {

        let line = ''
        for (let j = 0; j < words[i].length; j++) {
            if (!words[j]) return false
            line = line + words[j][i]
        }
        if (line != words[i]) {
            return false
        }
    }

    return true

};

words = [
    "ball",
    "area",
    "read",
    "lady"
]


words = [
    "abcd",
    "bnrt",
    "crmy",
    "dtye"
]

words = [
    "abcd",
    "bnrt",
    "crm",
    "dt"
]

words = [
    "abc",
    "b",
]
s = validWordSquare(words)

console.log(s)
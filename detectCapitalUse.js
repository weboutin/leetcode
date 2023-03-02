/**
 * 520. 检测大写字母
 * https://leetcode.cn/problems/detect-capital/
 */


var detectCapitalUse = function (word) {
    if (word.length == 1) return true
    let isFirstUpper = false
    let isSecondUpper = false
    if (/[A-Z]/.test(word[0])) {
        isFirstUpper = true
    }
    if (/[A-Z]/.test(word[1])) {
        isSecondUpper = true
    }
    if (word.length == 2) {
        return (isFirstUpper && !isSecondUpper) || (!isFirstUpper && !isSecondUpper) || (isFirstUpper && isSecondUpper)
    }


    for (let i = 2; i < word.length; i++) {
        if (isFirstUpper && !isSecondUpper) {
            if (/[A-Z]/.test(word[i])) {
                return false
            }
        }
        if (isFirstUpper && isSecondUpper) {
            if (/[a-z]/.test(word[i])) {
                return false
            }
        }
        if (!isFirstUpper) {
            if (/[A-Z]/.test(word[i])) {
                return false
            }

        }
    }


    return true

};

// mL

word = 'mL'
word = 'GG'
word = 'cVe'


s = detectCapitalUse(word)
console.log(s)
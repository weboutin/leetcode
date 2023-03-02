/**
 * 408. 有效单词缩写
 * https://leetcode.cn/problems/valid-word-abbreviation/ 
 */


/**
 * 72ms  12.50%
 * 41.1MB  62.50%
 */
var validWordAbbreviation = function (word, abbr) {
    let wIdx = 0

    for (let i = 0; i < abbr.length; i++) {
        if (abbr[i] == '0') return false

        let numberStrs = ''
        //连续两个数字
        for (let j = i; j < abbr.length; j++) {
            if (!isNaN(parseInt(abbr[j]))) {
                numberStrs += abbr[j]
            } else {
                break
            }
        }
        let numbers = Number(numberStrs)

        if (!isNaN(parseInt(abbr[i]))) {
            wIdx = wIdx + Number(numbers)
            i = i + numberStrs.length - 1
        } else {
            if (word[wIdx] != abbr[i]) {
                return false
            }
            wIdx++
        }
    }

    return wIdx == word.length

};

word = "internationalization", abbr = "i12iz4n"
word = "word", abbr = "3e"


s = validWordAbbreviation(word, abbr)
console.log(s)
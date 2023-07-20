/**
 * 2586. 统计范围内的元音字符串数
 * https://leetcode.cn/problems/count-the-number-of-vowel-strings-in-range/
 */



/**
 * 76ms  71.25%
 * 43.7MB  81.25%
 */
var vowelStrings = function (words, left, right) {

    let count = 0

    words = words.slice(left, right + 1)

    const reg1 = /^[a|e|i|o|u]$/

    const reg = /^[a|e|i|o|u].*?[a|e|i|o|u]$/


    for (let i = 0; i < words.length; i++) {

        if (reg.test(words[i]) || reg1.test(words[i])) {
            count++
        }

    }

    return count


};



words = ["are", "amy", "u"]

ans = vowelStrings(words, 0, 2)
console.log(ans)
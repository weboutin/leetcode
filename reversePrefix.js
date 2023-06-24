/**
 * 
 * 2000. 反转单词前缀
 * https://leetcode.cn/problems/reverse-prefix-of-word/?envType=list&envId=bxbmnec
 */


/**
 * 52ms  97.54%
 * 41MB  76.23%
 */
var reversePrefix = function (word, ch) {
    if (word.indexOf(ch) == -1) {
        return word
    }

    let result = ''
    for (let i = 0; i < word.length; i++) {
        result = word[i] + result
        if (word[i] == ch) {
            result = result + word.slice(i + 1)
            break
        }
    }
    return result
};

word = "abcdefd", ch = "d"
word = "abcd", ch = "z"

ans = reversePrefix(word, ch)
console.log(ans)
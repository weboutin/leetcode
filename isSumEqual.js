/**
 * https://leetcode.cn/problems/check-if-word-equals-summation-of-two-words/
 */



/**
 * 64ms  39.53%
 * 41.2MB  25.58%
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
    return cacl(firstWord) + cacl(secondWord) == cacl(targetWord)

};

function cacl(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += (str[str.length - 1 - i].charCodeAt() - 97) * Math.pow(10, i)
    }
    return sum

}

firstWord = "acb", secondWord = "cba", targetWord = "cdb"

ans = isSumEqual(firstWord, secondWord, targetWord)
console.log(ans)

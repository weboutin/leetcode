/**
 * 1768. 交替合并字符串
 * https://leetcode.cn/problems/merge-strings-alternately/
 */



/**
 * 52ms  95.10%
 * 41.1MB  81.12%
 */
var mergeAlternately = function (word1, word2) {
    let result = ''
    let i = 0;
    let j = 0;
    while (i < word1.length && j < word2.length) {
        result += `${word1[i]}${word2[j]}`
        i++;
        j++
    }
    if (word1.length > word2.length) {

        result += word1.slice(i)
    } else {
        result += word2.slice(j)
    }
    return result
};

word1 = "abckkk", word2 = "pqr"

ans = mergeAlternately(word1, word2)
console.log(ans)
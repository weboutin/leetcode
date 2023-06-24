/**
 * 1662. 检查两个字符串数组是否相等
 * https://leetcode.cn/problems/check-if-two-string-arrays-are-equivalent/?envType=list&envId=bxbmnec
 */



/**
 * 68ms  34.29%
 * 40.9MB  93.33%
 */
var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') == word2.join('')
};
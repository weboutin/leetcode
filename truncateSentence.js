/**
 * 1816. 截断句子
 * https://leetcode.cn/problems/truncate-sentence/
 */



/**
 * 56ms  81.82%
 * 41.2MB  16.16%
 */
var truncateSentence = function (s, k) {
    return s.split(' ').slice(0, k).join(' ')
};


s = "Hello how are you Contestant", k = 4

ans = truncateSentence(s, k)
console.log(ans)
/**
 * 1859. 将句子排序
 * https://leetcode.cn/problems/sorting-the-sentence/
 */




/**
 * 64ms  45.24%
 * 41.1MB  22.62%
 */
var sortSentence = function (s) {
    return s.split(' ').sort((a, b) => a[a.length - 1] - b[b.length - 1]).join(' ').replace(/[1-9]/g, '')
};
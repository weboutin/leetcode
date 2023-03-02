/**
 * 243. 最短单词距离
 * https://leetcode.cn/problems/shortest-word-distance/
 */


/**
 * 60ms  77.42%
 * 41.9MB  74.19%
 */
var shortestDistance = function (wordsDict, word1, word2) {
    let point1 = -1;
    let point2 = -1;
    let min = -1;

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] == word1) {
            point1 = i
        }
        if (wordsDict[i] == word2) {
            point2 = i
        }
        if (point1 != -1 && point2 != -1) {
            if (min == -1) {
                min = Math.abs(point1 - point2)
            } else {
                min = Math.min(min, Math.abs(point1 - point2))
            }
        }
    }

    return min
};

wordsDict = ["practice", "makes", "perfect", "coding", "makes"]
word1 = "coding"
word2 = "practice"


s = shortestDistance(wordsDict, word1, word2)
console.log(s)
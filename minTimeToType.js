/**
 * 1974. 使用特殊打字机键入单词的最少时间
 * https://leetcode.cn/problems/minimum-time-to-type-word-using-special-typewriter/
 */



/**
 * 72ms  15.38%
 * 49.59mb  7.69%
 */
var minTimeToType = function (word) {

    let count = 0

    word = 'a' + word

    for (let i = 1; i < word.length; i++) {
        count += helper(word[i], word[i - 1]) + 1
    }

    return count


};



function helper(a, b) {
    if (a == b) { return 0 }

    const aCode = a.charCodeAt()

    const bCode = b.charCodeAt()

    let min = Math.min(aCode, bCode)
    let max = Math.max(aCode, bCode)

    const second = Math.min(max - min, min - 97 + 123 - max)

    return second

}

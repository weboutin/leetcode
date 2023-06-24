/**
 * 1668. 最大重复子字符串
 * https://leetcode.cn/problems/maximum-repeating-substring/?envType=list&envId=bxbmnec
 */



/**
 * 68ms  35.25%
 * 42.6MB  5.75%
 */
var maxRepeating = function (sequence, word) {

    let fromIdx = 0

    let match

    let result = []



    while ((match = sequence.indexOf(word, fromIdx)) != -1) {
        result.push(match)
        fromIdx = match + 1
    }
    if (result.length == 0) {
        return 0
    }

    let maxCount = 0

    for (let i = 0; i < result.length; i++) {
        let tmp = 0
        let count = 0
        let tmpStr = word
        while ((tmp = sequence.indexOf(tmpStr)) != -1) {
            count++
            tmpStr += word
        }

        maxCount = Math.max(maxCount, count)
    }
    return maxCount
};


sequence = "ababc", word = "ab"
sequence = "ababc", word = "ac"

sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba", word = "aaaba"

// max = 4
"aaaba aaaba aaba aaaba aaaba aaaba aaaba"
// max = 5
"aaaba aaab aaaba aaaba aaaba aaaba aaaba"

// sequence = "aaaaaa", word = "aa"


ans = maxRepeating(sequence, word)
console.log(ans)
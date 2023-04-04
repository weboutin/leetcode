/**
 * 819. 最常见的单词
 * https://leetcode.cn/problems/most-common-word/
 */


/**
 * 72ms  38.40%
 * 43.2MB  53.60%
 */
var mostCommonWord = function (paragraph, banned) {
    const reg = /([A-Z]|[a-z])*/g

    const result = paragraph.match(reg)

    let map = new Map()

    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].toLocaleLowerCase()
        if (result[i].length == 0 || banned.includes(result[i])) {
            continue
        }

        if (!map.has(result[i])) {
            map.set(result[i], 1)
        } else {
            map.set(result[i], map.get(result[i]) + 1)
        }
    }

    let maxKey = ''
    let count = 0

    map.forEach((value, key) => {
        if (value > count) {
            count = value
            maxKey = key
        }
    })


    return maxKey


};

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]

ans = mostCommonWord(paragraph, banned)
console.log(ans)
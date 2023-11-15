/**
 * LCP 66. 最小展台数量
 * https://leetcode.cn/problems/600YaG/
 */


/**
 * 132ms  36.96%
 * 52.54MB  6.52%
 */
var minNumBooths = function (demand) {

    let wordMap = {}


    for (let i = 0; i < demand.length; i++) {

        let tmpMap = {}

        for (let j = 0; j < demand[i].length; j++) {
            if (tmpMap[demand[i][j]] == undefined) {
                tmpMap[demand[i][j]] = 1
            } else {
                tmpMap[demand[i][j]]++
            }
        }

        for (let key in tmpMap) {
            if (wordMap[key] == undefined) {
                wordMap[key] = tmpMap[key]
            } else {
                wordMap[key] = Math.max(tmpMap[key], wordMap[key])
            }

        }

    }

    let count = 0

    for (let key in wordMap) {
        count += wordMap[key]
    }

    return count

};


onabortdemand = ["acd", "bed", "accd"]

ans = minNumBooths(onabortdemand)
console.log(ans)
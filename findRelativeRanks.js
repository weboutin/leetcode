/**
 * 506. 相对名次
 * https://leetcode.cn/problems/relative-ranks/
 */


/**
 * 88ms  48.03%
 * 43.1MB  94.76%
 */
var findRelativeRanks = function (score) {
    let result = []
    const medal = ["Gold Medal", "Silver Medal", "Bronze Medal"]
    for (let i = 0; i < score.length; i++) {
        result[score[i]] = score[i]
    }

    for (let i = result.length - 1, j = 0; i >= 0; i--) {
        if (result[i] != undefined) {
            result[i] = j <= 2 ? medal[j] : `${j + 1}`
            j++
        }
    }

    const ans = []

    for (let i = 0; i < score.length; i++) {
        ans[i] = result[score[i]]
    }

    return ans
};



/**
 * 76ms  75.98%
 * 43.2MB  91.27%
 */
var findRelativeRanks = function (score) {
    const medal = ["Gold Medal", "Silver Medal", "Bronze Medal"]

    let map = {}
    const _score = (JSON.parse(JSON.stringify(score))).sort((a, b) => b - a)

    for (let i = 0; i < _score.length; i++) {
        if (i <= 2) {
            map[_score[i]] = medal[i]
        } else {
            map[_score[i]] = `${i + 1}`
        }
    }
    const ans = []
    for (let i = 0; i < score.length; i++) {
        ans.push(map[score[i]])
    }


    return ans
};




score = [5, 4, 3, 2, 1]

score = [123123, 11921, 1, 0, 123]
ans = findRelativeRanks(score)
console.log(ans)
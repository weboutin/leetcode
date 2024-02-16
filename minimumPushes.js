/**
 * 3014. 输入单词需要的最少按键次数 I
 * https://leetcode.cn/problems/minimum-number-of-pushes-to-type-word-i/
 */



/**
 * 68ms  33.33%
 * 53.58mb  5.88%
 */
var minimumPushes = function (word) {


    let count = 0

    let map = {}

    for (let i = 0; i < word.length; i++) {
        if (map[word[i]] == undefined) {
            map[word[i]] = 1
        } else {
            map[word[i]]++
        }
    }

    let sortdArr = []

    for (let key in map) {

        sortdArr.push({
            key: key,
            count: map[key]
        })
    }

    sortdArr = sortdArr.sort((a, b) => b.count - a.count)

    for (let i = 0; i < sortdArr.length; i++) {

        count += (1 + Math.floor((i / 8))) * sortdArr[i].count

    }

    return count

};

word = "abcde"

word = "xycdefghij"

ans = minimumPushes(word)
console.log(ans)
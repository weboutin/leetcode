/**
 * 2042. 检查句子中的数字是否递增
 * https://leetcode.cn/problems/check-if-numbers-are-ascending-in-a-sentence/
 */



/**
 * 64ms  47.26%
 * 41.1MB  73.59%
 */
var areNumbersAscending = function (s) {

    let arr = s.split(' ').filter(e => /[0-9]/.test(e[0]))

    for (let i = 0; i < arr.length - 1; i++) {
        if (Number(arr[i]) >= Number(arr[i + 1])) {
            return false
        }

    }
    return true

};

s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
// s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"

areNumbersAscending(s)
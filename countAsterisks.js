/**
 * 2315. 统计星号
 * https://leetcode.cn/problems/count-asterisks/
 */





/**
 * 60ms  75.47%
 * 41.2MB  71.70%
 */
var countAsterisks = function (s) {

    let count = 0


    let reg = /\|.*?\|/g

    s = s.replace(reg, '')

    for (let i = 0; i < s.length; i++) {

        if (s[i] == '*') count++

    }



    return count

};
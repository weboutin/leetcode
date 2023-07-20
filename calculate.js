/**
 * LCP 17. 速算机器人
 * https://leetcode.cn/problems/nGK0Fy/
 */


/**
 * 56ms  87.50%
 * 40.7MB  92.50%
 */
var calculate = function (s) {


    let x = 1;
    let y = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'A') {
            x = 2 * x + y
        } else {
            y = 2 * y + x
        }
    }


    return x + y

};
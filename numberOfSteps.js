/**
 * 1342. 将数字变成 0 的操作次数
 * https://leetcode.cn/problems/number-of-steps-to-reduce-a-number-to-zero/
 */



/**
 * 60ms  71.02%
 * 41.3MB  5.05%
 */
var numberOfSteps = function (num) {
    let counter = 0;


    while (num != 0) {

        if (num % 2 == 0) {
            num = num / 2
        } else {
            num = num - 1
        }
        counter++
    }

    return counter

};
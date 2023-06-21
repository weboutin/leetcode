/**
 * 2011. 执行操作后的变量值
 * https://leetcode.cn/problems/final-value-of-variable-after-performing-operations/
 */



/**
 * 56ms  93.73%
* 41.3MB  74.17%
 */
var finalValueAfterOperations = function (operations) {
    let result = 0

    for (let i = 0; i < operations.length; i++) {

        if (operations[i] == '++X' || operations[i] == 'X++') {
            result++
        } else {
            result--
        }
    }


    return result

};
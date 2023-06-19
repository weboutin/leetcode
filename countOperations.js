/**
 * 2169. 得到 0 的操作数
 * https://leetcode.cn/problems/count-operations-to-obtain-zero/
 */



/**
 * 72ms  28.57%
 * 41MB  75.82%
 */
var countOperations = function (num1, num2) {
    let counter = 0;
    while (num1 != 0 && num2 != 0) {
        if (num1 > num2) {
            num1 = num1 - num2
        } else {
            num2 = num2 - num1
        }
        counter++
    }
    return counter
};




num1 = 2, num2 = 3
num1 = 10, num2 = 10
num1 = 0, num2 = 0
ans = countOperations(num1, num2)
console.log(ans)
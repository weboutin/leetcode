/**
 * 2180. 统计各位数字之和为偶数的整数个数
 * https://leetcode.cn/problems/count-integers-with-even-digit-sum/
 */



/**
 * 68ms  33.82%
 * 42.2MB  30.96%
 */
var countEven = function (num) {
    let counter = 0
    for (let i = 2; i <= num; i++) {
        let sum = 0
        let tmpI = i
        while (tmpI >= 10) {
            sum += tmpI % 10
            tmpI = parseInt(tmpI / 10)
        }
        sum += tmpI

        if (sum % 2 == 0) {
            counter++
        }
    }
    return counter

};


num = 30

ans = countEven(num)
console.log(ans)



let tmpI = 54110
let sum = 0
while (tmpI > 10) {
    // console.log(tmpI % 10)
    sum += tmpI % 10
    tmpI = parseInt(tmpI / 10)
    // console.log(tmpI)
}
sum += tmpI
// console.log(sum)
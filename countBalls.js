/**
 * 1742. 盒子中小球的最大数量
 * https://leetcode.cn/problems/maximum-number-of-balls-in-a-box/
 */




/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    let max = 1

    let arr = []

    for (let i = lowLimit; i <= highLimit; i++) {
        let tmp = i
        let count = tmp % 10
        while (tmp >= 10) {
            count += tmp % 10
            tmp = tmp / 10
        }
        console.log(`count ${count}`)
        if (arr[count] == undefined) {
            arr[count] = 1
        } else {
            arr[count]++
            max = Math.max(arr[count], max)
        }
    }

    console.log(arr)
    return max

};


lowLimit = 5, highLimit = 15
ans = countBalls(lowLimit, highLimit)
console.log(ans)
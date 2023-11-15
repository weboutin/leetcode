/**
 * 7020. 统计对称整数的数目
 * https://leetcode.cn/contest/weekly-contest-361/problems/count-symmetric-integers/
 */



/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0
    for (let i = low; i <= high; i++) {
        const str = i.toString()
        if (str.length % 2 != 0) {
            continue
        }
        n = str.length / 2

        let leftSum = 0
        let rightSum = 0
        for (let i = 0; i < n; i++) {
            leftSum += Number(str[i])
            rightSum += Number(str[i + n])
        }

        if (leftSum == rightSum) count++
    }
    return count
};


ans = countSymmetricIntegers(1, 100)
console.log(ans)
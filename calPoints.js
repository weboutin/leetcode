/**
 * 682. 棒球比赛
 * https://leetcode.cn/problems/baseball-game/
 */


/**
 * 48ms  100.00%
 * 41MB  96.88%
 */
var calPoints = function (operations) {

    let result = []


    for (let i = 0; i < operations.length; i++) {
        let op = operations[i]

        if (op === 'C') {
            result.pop()
        } else if (op === 'D') {
            result.push(result[result.length - 1] * 2)
        } else if (op === '+') {
            result.push(result[result.length - 1] + result[result.length - 2])
        } else {
            result.push(Number(op))
        }
    }

    return result.reduce((a, b) => a + b, 0)

};


operations = ["1", "C"]
ans = calPoints(operations)
console.log(ans)
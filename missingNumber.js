/**
 * 1228. 等差数列中缺失的数字
 * https://leetcode.cn/problems/missing-number-in-arithmetic-progression/
 */


/**
 * 60ms  50.00%
 * 40.07mb  72.22%
 */
var missingNumber = function (arr) {
    return ((arr[0] + arr[arr.length - 1]) * (arr.length + 1) / 2) - (arr.reduce((a, b) => a + b))
}

/**
 * 56ms  88.89%
 * 40.43mb  5.56%
 */
var missingNumber = function (arr) {

    arr.sort((a, b) => a - b)

    let v1 = arr[1] - arr[0]
    let v2 = arr[2] - arr[1]

    if (arr.length == 3) {
        if (arr[0] + v1 == arr[1]) {
            // return [arr[0], arr[0] + v2, arr[1], arr[2]]
            return arr[0] + v2
        } else {
            // return [arr[0], arr[1], arr[1] + v1, arr[2]]
            return arr[1] + v1
        }
    }

    let v3 = arr[3] - arr[2]

    let n = null

    if (v1 == v2) {
        n = v1
    } else if (v1 == v3) {
        n = v1
    } else {
        n = v3
    }


    let curr = arr[0]

    for (let i = 0; i < arr.length + 1; i++) {
        if (arr[i] != curr) {
            return curr
        }

        curr += n
    }

};
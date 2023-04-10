/**
 * 1200. 最小绝对差
 * https://leetcode.cn/problems/minimum-absolute-difference/
 */

/**
 * 152ms  50.00%
 * 52.6MB  45.19%
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b)

    let best = Number.MAX_VALUE;

    let result = []

    for (let i = 1; i < arr.length; i++) {
        let abs = arr[i] - arr[i - 1]

        if (abs < best) {
            best = abs
            result = []
            result.push([arr[i - 1], arr[i]])
        } else if (abs == best){
            result.push([arr[i - 1], arr[i]])
        }

    }

    return result
}



arr = [6, 4, 2, 1, 5]
arr = [1, 3, 6, 10, 15]
arr = [4, 2, 1, 3]

arr = [1, 3, 6, 10, 15]
// arr = [40, 11, 26, 27, -20]

ans = minimumAbsDifference(arr)
console.log(ans)
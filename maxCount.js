/**
 * 598. 范围求和 II
 * https://leetcode.cn/problems/range-addition-ii/
 */


var maxCount = function (m, n, ops) {

    let arr = []
    for (let i = 0; i < m; i++) {
        arr.push([])
        for (let j = 0; j < n; j++) {
            arr[i][j] = 0
        }
    }


    ops.forEach(op => {
        for (let i = 0; i < op[0]; i++) {
            for (let j = 0; j < op[1]; j++) {
                arr[i][j]++
            }
        }
    });
    let max = 0
    let map = new Map()

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j]
            }
            if (map.get(arr[i][j])) {
                map.set(arr[i][j], map.get(arr[i][j]) + 1)
            } else {
                map.set(arr[i][j], 1)
            }
        }
    }


    return map.get(max)
};


/**
 * 64ms  67.02%
 * 42.8MB  88.30%
 */
var maxCount = function (m, n, ops) {
    if (ops.length == 0) {
        return m * n
    }
    let minLeft = ops[0][0]
    let minRight = ops[0][1]
    ops.forEach(op => {
        if (op[0] < minLeft) {
            minLeft = op[0]
        }
        if (op[1] < minRight) {
            minRight = op[1]
        }
    });

    return minLeft * minRight

};



m = 3, n = 3, ops = [[2, 2], [3, 3]]
// m = 3, n = 3, ops = [[2, 2], [3, 3], [3, 3], [3, 3], [2, 2], [3, 3], [3, 3], [3, 3], [2, 2], [3, 3], [3, 3], [3, 3]]
// m = 3, n = 3, ops = []

ans = maxCount(m, n, ops)
console.log(ans)
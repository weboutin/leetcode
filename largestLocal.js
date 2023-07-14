/**
 * 2373. 矩阵中的局部最大值
 * https://leetcode.cn/problems/largest-local-values-in-a-matrix/
 */



/**
 * 72ms  90.91%
 * 44.8MB  34.54%
 */
var largestLocal = function (grid) {
    n = grid.length - 2

    function getMax(i, j) {
        let maxValue = -1
        for (let m = i; m < i + 3; m++) {
            for (let n = j; n < j + 3; n++) {
                if (grid[m][n] > maxValue) {
                    maxValue = grid[m][n]
                }
            }
        }

        return maxValue
    }

    let result = []
    for (let i = 0; i < n; i++) {
        result[i] = []
        for (let j = 0; j < n; j++) {
            result[i][j] = getMax(i, j)
        }
    }
    return result
};


grid = [[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]]


ans = largestLocal(grid)
console.log(ans)
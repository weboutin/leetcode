/**
 * 1351. 统计有序矩阵中的负数
 * https://leetcode.cn/problems/count-negative-numbers-in-a-sorted-matrix/
 */


/**
 * 64ms  63.01%
 * 40.92mb  64.74%
 */
var countNegatives = function (grid) {

    let count = 0

    for (let i = 0; i < grid.length; i++) {

        for (let j = grid[i].length - 1; j >= 0; j--) {

            if (grid[i][j] < 0) {
                count++
            } else {
                break
            }

        }

    }

    return count

};
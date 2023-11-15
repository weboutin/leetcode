/**
 * 1260. 二维网格迁移
 * https://leetcode.cn/problems/shift-2d-grid/description/
 */


/**
 * 124ms  6.38%
 * 43.39mb  46.81%
 */
var shiftGrid = function (grid, k) {


    for (let i = 0; i < k; i++) {

        for (let m = 0; m < grid.length; m++) {
            let tmp = grid[m].pop()

            if (m < grid.length - 1) {
                grid[m + 1] = [tmp].concat(grid[m + 1])
            } else {
                grid[0] = [tmp].concat(grid[0])
            }
        }

    }

    return grid

};
/**
 * 2500. 删除每行中的最大值
 * https://leetcode.cn/problems/delete-greatest-value-in-each-row/
 */


/**
 * 60ms  93.51%
 * 43.1MB  72.73%
 */
var deleteGreatestValue = function (grid) {

    let sum = 0

    for (let i = 0; i < grid.length; i++) {
        grid[i].sort((a, b) => b - a)
    }

    for (let i = 0; i < grid[0].length; i++) {

        let max = 0

        for (let j = 0; j < grid.length; j++) {

            max = Math.max(grid[j][i], max)

        }

        sum += max

    }


    return sum

};
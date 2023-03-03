/**
 * 463. 岛屿的周长
 * https://leetcode.cn/problems/island-perimeter/
 */


/**
 * 152ms  24.32%
 * 48.9MB  83.51%
 */
var islandPerimeter = function (grid) {
    let sum = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                let len = 4

                if (i > 0 && grid[i - 1][j] == 1) {
                    len--
                }
                if (i < grid.length - 1 && grid[i + 1][j] == 1) {
                    len--
                }

                if (j > 0 && grid[i][j - 1] == 1) {
                    len--
                }
                if (j < grid[i].length - 1 && grid[i][j + 1] == 1) {
                    len--
                }

                sum += len
            }
        }
    }
    return sum
};

grid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
]

islandPerimeter(grid)
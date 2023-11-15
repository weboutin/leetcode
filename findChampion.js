/**
 * 2923. 找到冠军 I
 * https://leetcode.cn/problems/find-champion-i/
 */


/**
 * 76ms  71.43%
 * 44.37mb  59.34%
 */
var findChampion = function(grid) {
    let maxCount = 0
    let cur = -1

    for (let i = 0 ; i < grid.length; i++) {
        let tmpCount = 0
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                tmpCount++
            }
            if(tmpCount>maxCount) {
                cur = i
                maxCount = tmpCount
            }
        }
    }
    return cur
};
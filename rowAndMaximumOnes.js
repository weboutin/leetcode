/**
 * 2643. 一最多的行
 * https://leetcode.cn/problems/row-with-maximum-ones/
 */



/**
 * 100ms  59.52%
 * 48.5MB  97.96%
 */
var rowAndMaximumOnes = function (mat) {

    let minIndex = 0

    let maxCount = 0


    for (let i = 0; i < mat.length; i++) {
        let tmpCount = 0
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] == 1) {
                tmpCount++
            }
        }
        if (tmpCount > maxCount) {
            minIndex = i
            maxCount = tmpCount
        }
    }


    return [minIndex, maxCount]

};

mat = [[0, 1], [1, 0]]

ans = rowAndMaximumOnes(mat)
console.log(ans)
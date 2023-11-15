/**
 * 766. 托普利茨矩阵
 * https://leetcode.cn/problems/toeplitz-matrix/
 */


/**
 * 60ms  96.49%
 * 41.79mb  73.68%
 */
var isToeplitzMatrix = function (matrix) {

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {
            if (i > 0 && j > 0) {

                if (matrix[i][j] != matrix[i - 1][j - 1]) {
                    return false
                }

            }
        }

    }

    return true

};
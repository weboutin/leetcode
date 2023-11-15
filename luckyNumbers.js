/**
 * 1380. 矩阵中的幸运数
 * https://leetcode.cn/problems/lucky-numbers-in-a-matrix/
 */



/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let rowMinMap = {}

    for (let i = 0; i < matrix.length; i++) {

        let rowMin = Number.MAX_SAFE_INTEGER

        for (let j = 0; j < matrix[i].length; j++) {
            rowMin = Math.min(rowMin, matrix[i][j])
        }
        rowMinMap[rowMin] = 1
    }

    let lineMaxMap = {}

    for (let i = 0; i < matrix[0].length; i++) {

        let lineMax = Number.MIN_SAFE_INTEGER
        

    }
};
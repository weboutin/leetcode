/**
 * 566. 重塑矩阵
 * https://leetcode.cn/problems/reshape-the-matrix/
 */


/**
 * 68ms  98.20%
 * 43.2MB  99.18%
 */
var matrixReshape = function (mat, r, c) {
    if (mat.length * mat[0].length != r * c) {
        return mat
    }

    let ans = []

    let tmpR = 0

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (ans[tmpR] == undefined) {
                ans[tmpR] = []
            }
            if (ans[tmpR].length < c) {
                ans[tmpR].push(mat[i][j])
            }

            if (ans[tmpR].length == c) {
                tmpR++
            }

        }
    }
    return ans
}


mat = [[1, 2], [3, 4]], r = 4, c = 1

matrixReshape(mat, r, c)
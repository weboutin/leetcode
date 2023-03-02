/**
 * 旋转图像
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnhhkv/
 */
/**
 * 56 ms
 * 41 MB
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    // 上下翻转
    for (let i = 0; i < matrix.length / 2; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const tmp = matrix[i][j]
            matrix[i][j] = matrix[matrix.length - 1 - i][j]
            matrix[matrix.length - 1 - i][j] = tmp
        }
    }
    // 对角线交换
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            const tmp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = tmp
        }
    }
};


matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

rotate(matrix)


console.log(matrix)
/**
 * 对角线遍历
 * https://leetcode-cn.com/explore/learn/card/array-and-string/199/introduction-to-2d-array/774/
 */

/**
* @param {number[][]} matrix
* @return {number[]}
*/
var findDiagonalOrder = function (matrix) {
    let result = [];
    let forward = 1;//1上，2下
    let map = {}
    // matrix[i][j]
    let i = 0; let j = 0;
    while (1) {
        result.push(matrix[i][j]);
        if (forward === 1) {
            if (matrix[i - 1][j + 1]) {
                result.push(matrix[i - 1][j + 1]);
            } else if (matrix[i - 1][j]) {
                result.push(matrix[i - 1][j]);
            } else if{

            }
        }
    }
};

let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

//1247596289

console.log(findDiagonalOrder(a))
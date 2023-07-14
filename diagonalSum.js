/**
 * 1572. 矩阵对角线元素的和
 * https://leetcode.cn/problems/matrix-diagonal-sum/?envType=list&envId=bxbmnec
 */



/**
 * 52ms  96.08%
 * 41.8MB  47.06%
 */
var diagonalSum = function (mat) {
    let count = 0

    let n = mat.length

    for (let i = 0; i < n; i++) {
        count += mat[i][i]
    }

    for (let i = n - 1; i >= 0; i--) {
        count += mat[i][n - i - 1]
    }

    if (n % 2 != 0) {
        count -= mat[Math.floor(n / 2)][Math.floor(n / 2)]
    }

    return count

};


mat = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

mat = [[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]]

mat = [
    [7, 3, 1, 9],
    [3, 4, 6, 9],
    [6, 9, 6, 6],
    [9, 5, 8, 5]
]

ans = diagonalSum(mat)
console.log(ans)
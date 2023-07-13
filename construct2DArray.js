/**
 * 2022. 将一维数组转变成二维数组
 * https://leetcode.cn/problems/convert-1d-array-into-2d-array/submissions/
 */

/**
 * 192ms  66.67%
 * 62.7MB  25.00%
 */
var construct2DArray = function (original, m, n) {
    if (original.length != m * n) {
        return []
    }

    const result = []

    for (let i = 0; i < m; i++) {
        result[i] = []

        for (let j = i * n; j < n + i * n; j++) {
            result[i].push(original[j])

        }
    }


    return result
};


original = [1, 2, 3, 4], m = 2, n = 2
original = [1, 2, 3], m = 1, n = 3
original = [1, 2], m = 1, n = 1


ans = construct2DArray(original, m, n)

console.log(ans)
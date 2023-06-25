/**
 * 1619. 删除某些元素后的数组均值
 * https://leetcode.cn/problems/mean-of-array-after-removing-some-elements/?envType=list&envId=bxbmnec
 */


/**
 * 72ms  32.00%
 * 42.7MB  22.00%
 */
var trimMean = function (arr) {

    arr.sort((a, b) => a - b)


    let idx = arr.length * 0.05

    let result = arr.slice(idx, arr.length - idx * 2 + idx)


    return result.reduce((a, b) => a + b) / result.length


};

arr = [6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0]

arr = [6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4]

ans = trimMean(arr)
console.log(ans)

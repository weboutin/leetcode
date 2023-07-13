/**
 * 1539. 第 k 个缺失的正整数
 * https://leetcode.cn/problems/kth-missing-positive-number/?envType=list&envId=bxbmnec
 */



/**
 * 52ms  92.52%
 * 42.9MB  30.84%
 */
var findKthPositive = function (arr, k) {

    let result = []

    let arrIdx = 0


    for (let i = 1; i < arr[arr.length - 1]; i++) {

        if (arr[arrIdx] != i) {
            result.push(i)
        } else {
            arrIdx++
        }

    }


    while (result.length < k) {
        result.push(++arr[arr.length - 1])

    }


    return result[k - 1]

};

arr = [2, 3, 4, 7, 11], k = 5
arr = [1, 2, 3, 4], k = 2

ans = findKthPositive(arr, k)
/**
 * 1122. 数组的相对排序
 * https://leetcode.cn/problems/relative-sort-array/
 * 
 * LCR 075. 数组的相对排序
 * https://leetcode.cn/problems/0H97ZC/submissions/
 */





/**
 * 56ms  90.29%
 * 41.2MB  67.96%
 */
var relativeSortArray = function (arr1, arr2) {


    const result = []

    const map = {}

    for (let i = 0; i < arr1.length; i++) {
        if (map[arr1[i]] == undefined) {
            map[arr1[i]] = 1
        } else {
            map[arr1[i]]++
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < map[arr2[i]]; j++) {
            result.push(arr2[i])
        }
        delete map[arr2[i]]
    }

    const notExists = []
    for (let key in map) {
        for (let j = 0; j < map[key]; j++) {
            notExists.push(Number(key))
        }
    }

    return result.concat(notExists.sort((a, b) => a - b))

};

arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19, 19], arr2 = [2, 1, 4, 3, 9, 6]

ans = relativeSortArray(arr1, arr2)
console.log(ans)
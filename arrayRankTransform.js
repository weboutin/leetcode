/**
 * 1331. 数组序号转换
 * https://leetcode.cn/problems/rank-transform-of-an-array/
 */




/**
 * 208ms  64.71%
 * 67.2MB  47.06%
 */
var arrayRankTransform = function (arr) {
    let sorted = JSON.parse(JSON.stringify(arr)).sort((a, b) => a - b)

    let map = {}

    let idx = 1
    for (let i = 0; i < sorted.length; i++) {
        if (map[sorted[i]] == undefined) {
            map[sorted[i]] = idx
            idx++
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = map[arr[i]]
    }

    return arr


};


arr = [40, 10, 20, 30]
arr = [37, 12, 28, 9, 100, 56, 80, 5, 12]
//true is [5,3,4,2,8,6,7,1,3]

ans = arrayRankTransform(arr)
console.log(ans)
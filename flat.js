/**
 * 2625. 扁平化嵌套数组
 * https://leetcode.cn/problems/flatten-deeply-nested-array/?envType=study-plan-v2&envId=30-days-of-javascript
 */



/**
 * 超出时间限制
 */
var flat = function (arr, n) {
    for (let i = 0; i < n; i++) {
        let idx = 0
        while (idx < arr.length) {
            if (typeof arr[idx] != 'number') {
                const other = arr.slice(idx + 1, arr.length)
                const tmp = arr[idx]
                for (let i = 0; i < tmp.length; i++) {
                    arr[idx] = tmp[i]
                    idx++
                }
                arr = arr.slice(0, idx).concat(other)
            } else {
                idx++
            }
        }
    }
    return arr
};

var flat = function (arr, n) {

    const result = []

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] != 'number') {

        }

    }

    return result
};


arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 2

ans = flat(arr, n)
console.log(ans)
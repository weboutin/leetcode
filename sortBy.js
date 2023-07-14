/**
 * 2724. 排序方式
 * https://leetcode.cn/problems/sort-by/
 */



/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    if (arr.length == 1) {
        return arr
    }
    if (fn(arr[0]) > fn(arr[1])) {
        return arr.sort((a, b) => fn(a) - fn(b))
    } else {
        return arr.sort((a, b) => fn(b) - fn(a))
    }
};

arr = [5, 4, 1, 2, 3]
arr = [1, 2, 3, 4, 5]
fn = (x) => x

ans = sortBy(arr, fn)
console.log(ans)
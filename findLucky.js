/**
 * 1394. 找出数组中的幸运数
 * https://leetcode.cn/problems/find-lucky-integer-in-an-array/
 */



/**
 * 60ms  89.89%
 * 41.9MB  75.28%
 */
var findLucky = function (arr) {

    let map = {}

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] == undefined) {
            map[arr[i]] = 1
        } else {
            map[arr[i]]++
        }
    }

    let max = -1

    for (let key in map) {
        if (key == map[key] && map[key] > max) {
            max = map[key]
        }
    }

    return max

};
arr = [2, 2, 3, 4]
arr = [2, 2, 2, 3, 3]

ans = findLucky(arr)
console.log(ans)

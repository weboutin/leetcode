/**
 * 941. 有效的山脉数组
 * https://leetcode.cn/problems/valid-mountain-array/description/
 */




/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {

    if (arr.length < 3) return false

    let source = JSON.parse(JSON.stringify(arr))


    arr.sort((a, b) => b - a)

    if (arr[0] == arr[1]) return false

    const max = arr[0]

    let up = true

    if (source[0] == max || source[arr.length - 1] == max) return false

    for (let i = 1; i < source.length - 1; i++) {
        if (source[i] == max) {
            up = false
            continue
        }

        if (up) {
            if (source[i] > max || source[i] > source[i - 1] && source[i - 1] != max) {
                return false
            }
        } else {
            if (source[i] > max || source[i] < source[i - 1] && source[i - 1] != max) {
                return false
            }
        }

    }

    return true



};

/**
 * 1640. 能否连接形成数组
 * https://leetcode.cn/problems/check-array-formation-through-concatenation/?envType=list&envId=bxbmnec
 */


/**
 * 64ms  55.22%
 * 42.4MB  16.42%
 */
var canFormArray = function (arr, pieces) {

    let map = {}


    for (let i = 0; i < pieces.length; i++) {
        map[pieces[i][0]] = pieces[i]
    }

    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] == undefined) continue
        newArr = newArr.concat(map[arr[i]])
    }

    //判断 arr 和 新的数组是否一致
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != newArr[i]) {
            return false
        }
    }

    return true

};


arr = [91, 4, 64, 78], pieces = [[78], [4, 64], [91]]


ans = canFormArray(arr, pieces)
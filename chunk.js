/**
 * 2677. 分块数组
 * https://leetcode.cn/problems/chunk-array/
 */



/**
 * 64ms  70.36%
 * 43.5MB  43.19%
 */
var chunk = function (arr, size) {
    let result = []
    let tmpArr = []
    for (let i = 0; i < arr.length; i++) {
        if (tmpArr.length < size) {
            tmpArr.push(arr[i])
        } else {
            result.push(tmpArr)
            tmpArr = [arr[i]]
        }
    }
    if (tmpArr.length > 0) {
        result.push(tmpArr)
    }

    return result

};

arr = [1, 2, 3, 4, 5]
size = 1


ans = chunk(arr, size)
console.log(ans)
/**
 * 2634. 过滤数组中的元素
 * https://leetcode.cn/problems/filter-elements-from-array/submissions/
 */



/**
 * 60ms  64.81%
 * 41MB  76.57%
 */
var filter = function(arr, fn) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            result.push(arr[i])
        }
    }

    return result
};
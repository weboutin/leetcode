/**
 * 1213. 三个有序数组的交集
 * https://leetcode.cn/problems/intersection-of-three-sorted-arrays/
 */



/**
 * 60ms  100.00%
 * 42.33mb  20.00%
 */
var arraysIntersection = function (arr1, arr2, arr3) {
    const result = []

    let map2 = {}

    let map3 = {}


    for (let i = 0; i < arr2.length; i++) {
        map2[arr2[i]] = 1
        map3[arr3[i]] = 1
    }
    
    for (let i = 0; i < arr1.length; i++) {
        if (map2[arr1[i]] && map3[arr1[i]]) {
            result.push(arr1[i])
        }

    }

    return result
};

arr1 =
    [1, 2, 3, 4, 5]
arr2 =
    [1, 2, 5, 7, 9]
arr3 =
    [1, 3, 4, 5, 8]


arraysIntersection(arr1, arr2, arr3)
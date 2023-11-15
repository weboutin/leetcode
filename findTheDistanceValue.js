/**
 * 1385. 两个数组间的距离值
 * https://leetcode.cn/problems/find-the-distance-value-between-two-arrays/
 */


/**
 * 60ms  93.85%
 * 40.39mb  56.92%
 */
var findTheDistanceValue = function (arr1, arr2, d) {

    let count = 0

    for (let i = 0; i < arr1.length; i++) {
        let flag = true

        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                flag = false
                break
            }
        }
        if (flag) {
            count++
        }

    }

    return count

};
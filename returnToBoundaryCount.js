/**
 * 3028. 边界上的蚂蚁
 * https://leetcode.cn/problems/ant-on-the-boundary/
 */




/**
 * 64ms  54.29%
 * 49.88mb  94.29%
 */
var returnToBoundaryCount = function (nums) {

    let count = 0

    let current = 0

    for (let i = 0; i < nums.length; i++) {

        current = current + nums[i]
        if (current == 0) {
            count++
        }

    }

    return count

};
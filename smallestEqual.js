/**
 * 2057. 值相等的最小索引
 * https://leetcode.cn/problems/smallest-index-with-equal-value/?envType=list&envId=bxbmnec
 */



/**
 * 76ms  17.31%
 * 42.7MB  96.15%
 */
var smallestEqual = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        if (i % 10 == nums[i]) {
            return i
        }
    }

    return -1

};

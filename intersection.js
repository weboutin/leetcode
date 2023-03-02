/**
 * 349. 两个数组的交集
 * https://leetcode.cn/problems/intersection-of-two-arrays/
 */


/**
 * 84ms  7.65%
 * 42.6MB  39.14%
 */
var intersection = function (nums1, nums2) {
    let s = new Set()
    let resultS = new Set()
    let result = []
    for (let i = 0; i < nums1.length; i++) {
        s.add(nums1[i])
    }
    for (let i = 0; i < nums2.length; i++) {
        if (s.has(nums2[i]) && !resultS.has(nums2[i])) {
            resultS.add(nums2[i])
            result.push(nums2[i])
        }
    }

    return result
};

nums1 = [1, 2, 2, 1]
nums2 = [2, 2]


intersection(nums1, nums2)
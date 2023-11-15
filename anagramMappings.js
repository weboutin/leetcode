/**
 * 760. 找出变位映射
 * https://leetcode.cn/problems/find-anagram-mappings/
 */


/**
 * 60ms  55.88%
 * 40.10mb  52.94%
 */
var anagramMappings = function (nums1, nums2) {

    let map = {}

    for (let i = 0; i < nums2.length; i++) {
        map[nums2[i]] = i
    }

    let result = []

    for (let i = 0; i < nums1.length; i++) {
        result[i] = map[nums1[i]]
    }

    return result

};
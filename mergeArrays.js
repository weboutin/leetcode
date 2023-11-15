/**
 * 2570. 合并两个二维数组 - 求和法
 * https://leetcode.cn/problems/merge-two-2d-arrays-by-summing-values/
 */




/**
 * 72ms  80.00%
 * 43.96mb  20.00%
 */
var mergeArrays = function (nums1, nums2) {

    const result = []


    for (let i = 0; i < nums1.length; i++) {

        if (result[nums1[i][0]] == undefined) {
            result[nums1[i][0]] = nums1[i][1]
        } else {
            result[nums1[i][0]] = result[nums1[i][0]] + nums1[i][1]
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (result[nums2[i][0]] == undefined) {
            result[nums2[i][0]] = nums2[i][1]
        } else {
            result[nums2[i][0]] = result[nums2[i][0]] + nums2[i][1]
        }


    }

    return result.map((e, idx) => [idx, e]).filter(e => e)

};

// nums1 = [[1, 2], [2, 3], [4, 5]], nums2 = [[1, 4], [3, 2], [4, 1]]
nums1 = [[2, 4], [3, 6], [5, 5]], nums2 = [[1, 3], [4, 3]]

ans = mergeArrays(nums1, nums2)
console.log(ans)
/**
 * 2540. 最小公共值
 * https://leetcode.cn/problems/minimum-common-value/
 */




/**
 * 72ms  80.377%
 * 48.7%  39.72%
 */
var getCommon = function (nums1, nums2) {
    let comm = -1
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length && comm == -1) {
        if (nums1[i] == nums2[j]) {
            comm = nums1[i]
        } else if (nums1[i] > nums2[j]) {
            j++
        } else {
            i++
        }
    }
    return comm
};


nums1 = [1, 2, 3, 6], nums2 = [2, 3, 4, 5]


ans = getCommon(nums1, nums2)
console.log(ans)
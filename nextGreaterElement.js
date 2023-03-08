/**
 * 496. 下一个更大元素 I
 * https://leetcode.cn/problems/next-greater-element-i/
 */

/**
 * 60ms  93.72%
 * 42.8MB  72.58%
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = new Map()

    for (let i = 0; i < nums2.length; i++) {
        for (let j = i + 1; j < nums2.length; j++) {
            if (nums2[j] > nums2[i]) {
                map.set(nums2[i], nums2[j])
                break
            }
        }
    }
    return nums1.map(item => map.get(item) || -1)
};

nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]


s = nextGreaterElement(nums1, nums2)
console.log(s)
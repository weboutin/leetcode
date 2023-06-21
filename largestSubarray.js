/**
 * 1708. 长度为 K 的最大子数组
 * https://leetcode.cn/problems/largest-subarray-length-k/
 */



/**
 * over time
 */
var largestSubarray = function (nums, k) {
    let max = null
    for (let i = 0; i <= nums.length - k; i++) {
        let tmpArr = []

        for (let j = i; j < i + k; j++) {
            tmpArr.push(nums[j])
        }
        max = getMax(tmpArr, max)
    }
    return max

};
function getMax(nums1, nums2) {
    if (nums2 == null) return nums1
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] != nums2[i]) {
            return nums1[i] > nums2[i] ? nums1 : nums2
        }
    }
}

/**
 * 136ms  50.00%
 * 60.8MB  16.67%
 */
var largestSubarray = function (nums, k) {
    let maxIdx = 0
    for (let i = 0; i <= nums.length - k; i++) {
        if (nums[i] > nums[maxIdx]) {
            maxIdx = i
        }
    }
    return nums.slice(maxIdx, maxIdx + k)

};


nums = [1, 4, 5, 2, 3], k = 4
// nums = [75], k = 1
// nums = [1, 4, 5, 2, 3], k = 3

// nums = [1, 4, 5], k = 3
nums = [53, 67, 81, 14, 20, 56, 54, 63, 38, 8, 80, 59, 89, 48, 19, 22], k = 5

ans = largestSubarray(nums, k)
console.log(ans)
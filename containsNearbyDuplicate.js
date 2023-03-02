/**
 * 219. 存在重复元素 II
 * https://leetcode.cn/problems/contains-duplicate-ii/
 */

/**
 * 6340ms  13.61%
 * 49.4MB  83.91%
 */
var containsNearbyDuplicate = function (nums, k) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
                return true
            }
        }
    }
    return false
};

/**
 * 96ms  75.38%
 * 54.3MB  72.07%
 */
var containsNearbyDuplicate = function (nums, k) {
    if (k == 0) return false
    let s = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (s.has(nums[i])) {
            return true
        }
        if (s.size == k) {
            s.delete(nums[i - k])
        }
        s.add(nums[i])
    }
    return false
};



// nums = [1, 2, 3, 1, 2, 3], k = 2
// nums = [1, 0, 1, 1], k = 1
// nums = [1, 2, 3, 1], k = 3

// nums = [1, 2, 1], k = 0

nums = [1, 2, 3, 1, 2, 3], k = 2
const result = containsNearbyDuplicate(nums, k)
console.log(result)
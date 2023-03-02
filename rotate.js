/**
 * 旋转数组
 */
/**
 * 3412 ms
 * 51.3 MB
 */
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        const tmp = nums[nums.length - 1]
        for (let j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j - 1]
        }
        nums[0] = tmp
    }
};


nums = [1, 2, 3, 4, 5, 6, 7], k = 3

rotate(nums, k)

console.log(nums)

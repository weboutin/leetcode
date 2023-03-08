/**
 * 645. 错误的集合
 * https://leetcode.cn/problems/set-mismatch/
 */



/**
 * 92ms  50.90%
 * 46.5MB  38.28%
 */
var findErrorNums = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let lost = null
    let repeat = null
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            repeat = nums[i]
            break
        }
    }
    nums = [0, ...nums, nums.length + 1]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] == 2) {
            lost = nums[i - 1] + 1
            break
        }
    }
    return [repeat, lost]

};


var findErrorNums = function (nums) {
    const errorNums = new Array(2).fill(0);
    const n = nums.length;
    nums.sort((a, b) => a - b);
    let prev = 0;
    for (let i = 0; i < n; i++) {
        const curr = nums[i];
        if (curr === prev) {
            errorNums[0] = prev;
        } else if (curr - prev > 1) {
            errorNums[1] = prev + 1;
        }
        prev = curr;
    }
    if (nums[n - 1] !== n) {
        errorNums[1] = n;
    }
    return errorNums;
};


nums = [1, 1]
nums = [3, 2, 2]

nums = [2, 3, 4, 5, 5, 6]
// nums = [2, 2]

nums = [1, 2, 2, 4]

nums = [1, 5, 3, 2, 2, 7, 6, 4, 8, 9]

nums = [5, 3, 6, 1, 5, 4, 7, 8]
ans = findErrorNums(nums)
console.log(ans)


// [3, 1, 1]
// [1, 2]
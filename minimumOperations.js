/**
 * 2357. 使数组中所有元素都等于零
 * https://leetcode.cn/problems/make-array-zero-by-subtracting-equal-amounts/
 */


/**
 * 64ms  54.12%
 * 41MB  62.35%
 */
var minimumOperations = function (nums) {

    nums = nums.sort((a, b) => a - b)


    let count = 0


    for (let i = 0; i < nums.length; i++) {
        let x = nums[i]
        if (x == 0) {
            continue
        }
        count++
        for (let j = i; j < nums.length; j++) {
            nums[j] = nums[j] - x
        }
        if (nums[nums.length - 1] == 0) {
            return count
        }
    }

    return count

};


/**
 * 64ms  54.12%
 * 41.1MB  43.53%
 */
var minimumOperations = function(nums) {
    const set = new Set();
    for (const num of nums) {
        if (num > 0) {
            set.add(num);
        }
    }
    return set.size;
};



nums = [1, 5, 0, 3, 5]

ans = minimumOperations(nums)

console.log(ans)
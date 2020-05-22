/**
 * 747. 至少是其他数字两倍的最大数
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let maxIndex = 0;
    let max = nums[maxIndex];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] * 2 > max && i !== maxIndex) {
            return -1;
        }
    }
    return maxIndex;
}

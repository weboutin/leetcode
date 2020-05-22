//寻找数组的中心索引
//link: https://leetcode-cn.com/explore/learn/card/array-and-string/198/introduction-to-array/770/ 

/**
 * @param {number[]} nums
 * @return {number}
 */
function sumArr(arr, start, end) {
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += arr[i];
    }
    return sum;
}
function sumLeft(arr, index) {
    return sumArr(arr, 0, index);
}
function sumRight(arr, index) {
    return sumArr(arr, index + 1, arr.length);
}

function pivotIndex(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (sumLeft(nums, i) === sumRight(nums, i)) {
            return i;
        }
    }
    return -1;
}
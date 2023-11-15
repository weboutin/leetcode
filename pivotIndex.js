/**
 * LCR 012. 寻找数组的中心下标
 * https://leetcode.cn/problems/tvdfij/description/
 */



/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {

    nums = nums.map((e, idx) => `${e}_${idx}`)

    let i = 0;
    let j = nums.length - 1

    let leftSum = 0
    let rightSum = 0

    while (i < j) {
        // console.log(leftSum)
        // console.log(rightSum)
        if (leftSum > rightSum) {
            // console.log(nums[i])
            rightSum += Number(nums[j].split('_')[0])
            j--
        } else {
            leftSum += Number(nums[i].split('_')[0])
            // console.log(nums[j])
            i++
        }
    }

    console.log(nums[i])
    console.log(nums)
    console.log(leftSum)
    console.log(rightSum)

    if (leftSum == rightSum) {
        return Number(nums[i].split('_')[1])
    } else {
        return -1
    }



};


nums = [2, 1, -1]
// nums = [1, 7, 3, 6, 5, 6]

ans = pivotIndex(nums)
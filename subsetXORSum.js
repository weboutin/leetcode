/**
 * 1863. 找出所有子集的异或总和再求和
 * https://leetcode.cn/problems/sum-of-all-subset-xor-totals/
 */



/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {

    let sum = 0

    for (let i = 0; i < nums.length; i++) {

        for (let j = i; j < nums.length; j++) {
            let tmpSum = 0


            for (let k = i; k < j; k++) {
                tmpSum ^= nums[k]
            }


            for (let m = j; m < nums.length; m++) {
                tmpSum ^= nums[m]


            }


            // for (let k = i; k < j; k++) {
            //     tmpSum ^= nums[k]
            // }

            sum += tmpSum
        }


    }

    return sum

};
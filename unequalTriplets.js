/**
 * https://leetcode.cn/problems/number-of-unequal-triplets-in-array/?envType=list&envId=bxbmnec
 */




/**
 * 68ms  61.14%
 * 41MB  72.70%
 */
var unequalTriplets = function (nums) {

    let count = 0
    for (let i = 0; i < nums.length - 2; i++) {

        for (let j = i + 1; j < nums.length - 1; j++) {

            for (let k = j + 1; k < nums.length; k++) {

                if (nums[i] != nums[j] && nums[i] != nums[k] && nums[j] != nums[k]) {
                    count++
                }

            }
        }

    }

    return count

};
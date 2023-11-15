




/**
 * 84ms  34.58%
 * 42.29mb  53.59%
 */
var numberOfPoints = function (nums) {
    let arr = []

    for (let i = 0; i < nums.length; i++) {

        for (let j = nums[i][0]; j <= nums[i][1]; j++) {

            arr[j] = 1
        }

    }

    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) count++
    }
    return count
};
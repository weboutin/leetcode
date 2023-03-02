
/**
 * - 2992 ms
 * 49.7 MB
 */
var moveZeroes = function (nums) {
    let zeroIndex = nums.length - 1
    let index = 0
    while (index < nums.length) {
        if (nums[index] == 0) {
            for (let j = index; j < zeroIndex; j++) {
                let tmp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = tmp
            }
            zeroIndex--
            if (index >= zeroIndex) {
                return
            }
            console.log(`index - ${index}`)
            console.log(`zindex - ${zeroIndex}`)
        } else {
            index++
        }
    }
};


nums = [0, 1, 0, 3, 12]
// nums = [0, 0, 1]
// 1 3 12 0 0
// 0 1 0
// 1 0 0

moveZeroes(nums)

console.log(nums)
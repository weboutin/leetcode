/**
 * 1365. 有多少小于当前数字的数字
 * https://leetcode.cn/problems/how-many-numbers-are-smaller-than-the-current-number/?envType=list&envId=bxbmnec
 */


/**
 * 64ms  97.31%
 * 43.5MB  24.62%
 */
var smallerNumbersThanCurrent = function (nums) {
    sortedNums = JSON.parse(JSON.stringify(nums)).sort((a, b) => a - b)
    let map = {}
    let idx = 0
    for (let i = 0; i < sortedNums.length; i++) {

        map[sortedNums[i]] = idx

        if (sortedNums[i + 1] > sortedNums[i]) {
            idx = i + 1
        }
    }
    return nums.map(e => map[e])
};



nums = [8, 1, 2, 2, 3]
nums = [6,5,4,8]

nums = [7,7,7,7]
ans = smallerNumbersThanCurrent(nums)

console.log(ans)
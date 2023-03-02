
/**
 * 228. 汇总区间
 * https://leetcode.cn/problems/summary-ranges/
 */


/**
 * 44ms  99.36%
 * 41.1MB  53.35%
 */
var summaryRanges = function (nums) {
    let result = []
    let i = 0
    while (i < nums.length) {
        //遇到连续数值
        if (nums[i] + 1 == nums[i + 1]) {
            let tmp = []
            tmp.push(nums[i])
            let j = i + 1
            while (nums[j] + 1 == nums[j + 1]) {
                tmp.push(nums[j])
                j++
            }
            tmp.push(nums[j])
            result.push(tmp)
            i = j + 1
            continue
        } else {
            result.push([nums[i]])
        }
        i++
    }
    return result.map(item => {
        if (item.length == 1) {
            return `${item[0]}`
        } else {
            return `${item[0]}->${item[item.length - 1]}`
        }
    })
};

nums = [0, 2, 3, 4, 6, 8, 9]
nums = [0,1,2,4,5,7]
const result = summaryRanges(nums)
console.log(result)
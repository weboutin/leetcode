
// 存在重复元素则返回 true 否则返回 false
//理由map的唯一
var containsDuplicate = function (nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) return true
        map[nums[i]] = 1
    }
    return false
}

//双指针
var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return true
            }
        }
    }
    return false
}
//排序后双指针优化版，但是 sort 使用的是内置方法，我认为不妥
var containsDuplicate = function (nums) {
    nums = nums.sort()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            return true
        }
    }
    return false
}



const nums = [1, 2, 3, 4]


const b = containsDuplicate(nums)
console.log(b)
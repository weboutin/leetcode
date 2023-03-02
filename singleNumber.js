
//双指针
// - 448ms
// - 42.1mb
var singleNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        //是否存在相等的数字
        let flag = false
        for (let j = 0; j < nums.length; j++) {
            if (i == j) continue
            if (nums[i] == nums[j]) {
                flag = true
            }
        }
        if (flag == false)
            return nums[i]
    }
};

/**
 * 先sort 再比较每个元素的左右是否相等，如果都不存在相等，则返回
 * time:80ms
 * mem: 43.9
 * 应该有更精简的写法？
 * - 比较次数太多，无需比较左右一次
 */
var singleNumber = function (nums) {
    nums = nums.sort()
    for (let i = 0; i < nums.length; i++) {
        if (i == 0 && nums[0] != nums[1]) {
            return nums[i]
        }
        if (i == nums.length - 1 && nums[i] != nums[i - 1]) {
            return nums[i]
        }
        if (nums[i] != nums[i - 1] && nums[i] != nums[i + 1] && i != 0 && i != nums.length - 1) {
            return nums[i]
        }
    }
};
//使用map来累计，再遍历map
//time 72ms
//mem 45.7
var singleNumber = function (nums) {
    const map = {}
    nums.forEach(e => {
        if (map[e]) {
            map[e]++
        } else {
            map[e] = 1
        }
    });
    for (let key in map) {
        if (map[key] == 1) {
            return key
        }
    }
};

/**
 使用位，异或运算
 a^a=0；自己和自己异或等于0
 a^0=a；任何数字和0异或还等于他自己
 a^b^c=a^c^b；异或运算具有交换律
 time: 68ms
 mem: 42.2
 */
var singleNumber = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i]
    }
    return result
};

//使用 set
//time: 72ms
// mem: 45.1
var singleNumber = function (nums) {
    let s = new Set()
    nums.forEach(e => {
        if (s.has(e)) {
            s.delete(e)
        } else {
            s.add(e)
        }
    })
    return s.values().next().value
};


/**
 * 重复的一定是两次，所以比较奇数位置即可
 * - 100ms
 * - 43.9mb
 */
var singleNumber = function (nums) {
    nums = nums.sort()
    for (let i = 0; i < nums.length; i = i + 2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i]
        }
    }
    return nums[nums.length - 1]
};

nums = [4, 1, 2, 1, 2]


const rs = singleNumber(nums) // 1
console.log(rs)




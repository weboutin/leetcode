


//双指针法

//用for 来更精简代码
var removeDuplicates = function (nums) {
    let index = 0
    let next = index + 1
    while (next < nums.length) {
        if (nums[index] == nums[next]) {
            next++
        } else {
            index++
            nums[index] = nums[next]
        }
    }
    //长度为数组下标 + 1
    return index + 1
};

removeDuplicates = function (nums) {
    // let index = 0
    // let next = index + 1
    // while (next < nums.length) {
    //     if (nums[index] == nums[next]) {
    //         next++
    //     } else {
    //         index++
    //         nums[index] = nums[next]
    //     }
    // }
    // //长度为数组下标 + 1
    // return index + 1
    let index = 0;
    for (let next = 1; next < nums.length; next++) {
        if (nums[index] != nums[next]) {
            index ++
            nums[index] = nums[next]
        }
    }
    return index + 1
};


const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 9]



removeDuplicates(nums)
console.log(nums)
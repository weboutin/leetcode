function pivotIndex(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        count += nums[i];
    }
    let countLeft = 0;
    for (let i = 0; i < nums.length; i++) {
        if (countLeft * 2 + nums[i] === count) {
            return i;
        }
        countLeft += nums[i];
    }
    return -1;
}
console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
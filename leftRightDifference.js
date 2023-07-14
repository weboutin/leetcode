/**
 * 2574. 左右元素和的差值
 * https://leetcode.cn/problems/left-and-right-sum-differences/
 */



/**
 * 80ms  38.53%
 * 47.4MB  10.09%
 */
var leftRightDifference = function (nums) {

    const ans = []
    let sumLeft = [0]
    let sumRight = [0]

    let leftCount = 0

    let rightCount = 0

    for (let i = 0; i < nums.length - 1; i++) {
        leftCount = leftCount + nums[i]
        sumLeft.push(leftCount)


        rightCount = rightCount + nums[nums.length - i - 1]
        sumRight = [rightCount].concat(sumRight)

    }

    for (let i = 0; i < nums.length; i++) {

        ans[i]  = Math.abs(sumLeft[i] - sumRight[i])

    }




    return ans

};
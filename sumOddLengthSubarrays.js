/**
 * 1588. 所有奇数长度子数组的和
 * https://leetcode.cn/problems/sum-of-all-odd-length-subarrays/?envType=list&envId=bxbmnec
 */



/**
 * 72ms  19.18%
 * 46.8MB  6.85%
 */
var sumOddLengthSubarrays = function (arr) {
    let flag = 1

    let count = 0

    while (flag <= arr.length) {

        for (let i = 0; i < arr.length; i++) {
            if (i + flag <= arr.length) {
                count += arr.slice(i, i + flag).reduce((a, b) => a + b)
            }
        }
        flag += 2
    }

    return count

};

arr = [1, 4, 2, 5, 3]
// arr = [1, 2]
arr = [10,11,12]

ans = sumOddLengthSubarrays(arr)
console.log(ans)
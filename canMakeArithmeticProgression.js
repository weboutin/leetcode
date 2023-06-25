/**
 * 1502. 判断能否形成等差数列
 * https://leetcode.cn/problems/can-make-arithmetic-progression-from-sequence/?envType=list&envId=bxbmnec
 */



/**
 * 60ms  82.69%
 * 40.9MB  99.36%
 */
var canMakeArithmeticProgression = function (arr) {

    arr.sort((a, b) => a - b)

    let x = arr[1] - arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + x != arr[i + 1]) {
            return false
        }
    }
    return true
};


arr = [3, 5, 1]

ans = canMakeArithmeticProgression(arr)
console.log(ans)
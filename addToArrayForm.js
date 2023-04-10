/**
 * 989. 数组形式的整数加法
 * https://leetcode.cn/problems/add-to-array-form-of-integer/
 */


/**
 * 
 * 96ms  78.18%
 * 45.5MB  94.55%
 */
var addToArrayForm = function (num, k) {

    let needPlus = 0
    for (let i = num.length - 1; i >= 0; i--) {

        let tmp = k % 10 + num[i] + needPlus
        if (tmp >= 10) {
            num[i] = tmp % 10
            needPlus = 1
        } else {
            num[i] = tmp
            needPlus = 0
        }

        k = parseInt(k / 10)

    }

    k = k + needPlus



    while (k != 0) {

        num = [k % 10].concat(num)

        k = parseInt(k / 10)
    }

    return num


};


num = [1, 2, 0, 0], k = 34
num = [2, 7, 4], k = 181
num = [2, 1, 5], k = 806

num = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], k = 1


num = [0], k = 23
num = [1], k = 99 // [1,0,0]

ans = addToArrayForm(num, k)
console.log(ans)
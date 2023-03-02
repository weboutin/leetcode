/**
 * 367. 有效的完全平方数
 * https://leetcode.cn/problems/valid-perfect-square/
 */

/**
 * 56ms  84.44%
 * 40.8MB  79.21%
 */
var isPerfectSquare = function (num) {
    let low = 0
    let high = num

    while (low <= high) {
        let middle = Math.floor((high - low) / 2) + low
        if (middle * middle > num) {
            high = middle - 1;
        }
        else if (middle * middle < num) {
            low = middle + 1;
        } else {
            return true
        }
    }

    return false
};


/**
 * 64ms  44.64%
 * 40.8MB  77.55%
 */
var isPerfectSquare = function (num) {

    if (num * num == num) return true
    let low = 1
    let high = num

    while (low <= high) {
        let middle = parseInt((low + high) / 2);
        if (low == middle) break
        if (middle * middle == num) {
            return true
        }
        else if (middle * middle > num) {
            high = middle;
        }
        else if (middle * middle < num) {
            low = middle;
        }
    }

    return false
};




s = isPerfectSquare(49)

console.log(s)
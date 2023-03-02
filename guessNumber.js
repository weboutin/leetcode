/**
 * 374. 猜数字大小
 * https://leetcode.cn/problems/guess-number-higher-or-lower/
 */



/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

var guess = function (num) {
    let pick = 6
    if (num == 6) return 0
    if (pick < num) return -1
    if (pick > num) return 1
}


/**
 * 68ms  16.05%
 * 41.4MB  5.01%
 */
var guessNumber = function (n) {
    return helper(1, n)
};

function helper(start, end) {
    let g = start + parseInt((end - start) / 2)

    if (end - start == 1) {
        endG = guess(end)
        startG = guess(start)
        return endG == 0 ? end : start
    }


    let picked = guess(g)

    if (picked == 0) {
        return g
    }

    if (start == end) {
        return picked
    }

    if (picked == -1) {
        return helper(start, g)
    }

    if (picked == 1) {
        return helper(g, end)
    }

}

// s = guessNumber(10)
s = guessNumber(2)
console.log(s)

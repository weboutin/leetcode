/**
 * 汉明距离
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnyode/
 */

/**
 * 64ms 39.04%
 * 41.7MB 5.10%
 */
var hammingDistance = function (x, y) {
    x = toBinary(x)
    y = toBinary(y)
    let count = 0;
    let zero = []
    for (let i = 0; i < Math.abs(x.length - y.length); i++) {
        zero.push(0)
    }
    if ((x.length - y.length) > 0) {
        y = zero.concat(y)
    } else {
        x = zero.concat(x)
    }
    for (let i = 0; i < x.length; i++) {
        count += x[i] ^ y[i]
    }
    return count
};

/***
 * 64ms 39.04%
 * 41MB 90.99%
 */
var hammingDistance = function (x, y) {
    let tmp = x ^ y
    tmp = toBinary(tmp)
    let count = 0
    tmp.forEach(e => {
        if (e == 1) count++
    })
    return count
};


/**
 * 64ms 39.04%
 * 41.1 MB 65.76%
 */
var hammingDistance = function (x, y) {
    let num = x ^ y
    let stack = []
    let count = 0
    while (num != 0) {
        if (num % 2 == 1) count++
        stack.push(num % 2)
        num = Math.floor(num / 2)
    }
    return count
};


function toBinary(num) {
    let stack = []
    while (num != 0) {
        stack.push(num % 2)
        num = Math.floor(num / 2)
    }
    const result = []
    while (stack.length > 0) {
        result.push(stack.pop())
    }
    return result
}


// console.log(toBinary(100))

const result = hammingDistance(1, 4)

console.log(result)
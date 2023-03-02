/**
 * 颠倒二进制位
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnc5vg/
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let arr = n.toString(2).split('').map(e => +e)

    for (let i = 0; i < arr.length / 2; i++) {
        let tmp = arr[i]
        arr[i] = arr[arr.length - i - 1]
        arr[arr.length - i - 1] = tmp
    }

    for (let i = 0; i < 32 - arr.length; i++) {
        arr.push(0)
    }
    let len = arr.length
    arr = arr.slice(arr.indexOf(1), len)
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * (2 ** (arr.length - i - 1))
    }
    return parseInt(arr.join(''), 2)
};
var reverseBits = function (n) {
    let bit = n.toString(2)
    while (bit.length < 32) bit = '0' + bit
    bit = bit.split('').reverse().join('')
    return parseInt(bit, 2)
};


function toTen(n) {
    let arr = n.toString().split('').map(e => +e)
    let len = arr.length
    arr = arr.slice(arr.indexOf(1), len)
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * (2 ** (arr.length - i - 1))
    }
    return sum
}


n = '00111001011110000010100101000000'
n = '00000010100101000001111010011100'
//964176192 

// let result = toTen(n)
// console.log(result)
let result = reverseBits(n)
console.log(result)
/**
 * 2620. 计数器
 * https://leetcode.cn/problems/counter/
 */



/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    let _n = n
    return function () {
        return _n++
    };
};


const counter = createCounter(10)
a = counter() // 10
console.log(a)
a = counter() // 10
console.log(a)
a = counter() // 10
console.log(a)
// counter() // 11
// counter() // 12

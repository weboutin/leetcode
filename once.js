/**
 * 2666. 只允许一次函数调用
 * https://leetcode.cn/problems/allow-one-function-call/
 */



/**
 * 48ms  99.01%
 * 41MB  46.72%
 */
var once = function (fn) {
    let isFirst = false
    return function (...args) {
        if (isFirst) {
            return
        }
        isFirst = true
        return fn(...args)
    }
};

let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)

ans = onceFn(1, 2, 3); // 6
// console.log(ans)
// onceFn(2, 3, 6); // returns undefined without calling fn
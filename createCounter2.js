/**
 * 2665. 计数器 II
 * https://leetcode.cn/problems/counter-ii/
 */



/**
 * 72ms  46.74%
 * 43.9MB  38.90%
 */
var createCounter = function (init) {
    let _val = init

    const originVal = init

    return new function () {
        this.increment = function () {
            _val++
            return _val
        }
        this.reset = function () {
            _val = originVal
            return _val
        }

        this.decrement = function () {
            _val--
            return _val
        }
    }
};


const counter = createCounter(5)
ans = counter.increment(); // 6
console.log(ans)
ans = counter.reset(); // 5
console.log(ans)
ans = counter.decrement(); // 4
console.log(ans)
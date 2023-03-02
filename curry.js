
const assert = require('assert')

function add(a, b, c) {
    return a + b + c
}


function curry(fn) {
    return _curry.call(this, fn, fn.length, [])
}

function _curry(fn, fnArgLen, arg) {
    return function (..._arg) {
        _arg = arg.concat(_arg)

        if (_arg.length >= fnArgLen) {
            return fn.apply(this, _arg)
        }

        return _curry.call(this, fn, fnArgLen, _arg)
    }
}

const addCurry = curry(add)


assert.equal(addCurry(1)(2)(3), 6)
assert.equal(addCurry(1, 2)(3), 6)
assert.equal(addCurry(1)(2, 3), 6)


function plus(...arg) {
    const _plus = function (..._arg) {
        arg = arg.concat(_arg)
        return _plus
    }

    _plus.toString = function () {
        return arg.reduce((a,b) => a + b)
    }

    return _plus
}


assert.equal(`${plus(1)}`, 1) // 6;
assert.equal(`${plus(1)(2)(3)}`, 6) // 6;
assert.equal(`${plus(1, 2, 3)(4)}`, 10) // 10;
assert.equal(`${plus(1)(2)(3)(4)(5)}`, 15) // 15;
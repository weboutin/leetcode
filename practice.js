const assert = require('assert')

const Animal = {
    name: 'Animal',
    say: function (word, word2) {
        return `name:${this.name}, say: ${word}, ${word2}`
    }
}

const Cat = {
    name: 'cat'
}

Function.prototype.myApply = function (thisArg, args) {
    if (!thisArg) thisArg = Object.create(null)
    const fn = this
    const fnKey = Symbol()
    thisArg.fnKey = fn
    const result = thisArg.fnKey(...args)
    delete thisArg.fnKey
    return result
}
//todo： 校验 this 没有被额外绑定
assert.equal(Animal.say.myApply(Cat, ['miu', 'miu~']), Animal.say.apply(Cat, ['miu', 'miu~']))
assert.equal(Animal.say.myApply(null, ['miu', 'miu~']), Animal.say.myApply(null, ['miu', 'miu~']))

Function.prototype.myCall = function (thisArg, ...args) {
    if (!thisArg) thisArg = Object.create(null)
    const fn = this
    const fnKey = Symbol()
    thisArg.fnKey = fn
    const result = thisArg.fnKey(...args)
    delete thisArg.fnKey
    return result
}
//todo： 校验 this 没有被额外绑定
assert.equal(Animal.say.myCall(Cat, 'miu', 'miu~'), Animal.say.call(Cat, 'miu', 'miu~'))
assert.equal(Animal.say.myCall(null, 'miu', 'miu~'), Animal.say.myCall(null, 'miu', 'miu~'))

Function.prototype.myBind = function (thisArg) {
    if (!thisArg) thisArg = Object.create(null)
    const fn = this
    thisArg.fn = fn
    return (...args) => {
        return thisArg.fn(...args)
    }
}

const myBindSay = Animal.say.myBind(Cat)
const bindSay = Animal.say.bind(Cat)
assert.equal(myBindSay('miu', 'miu~'), bindSay('miu', 'miu~'))
const myBindSayWithNull = Animal.say.myBind(null)
const bindSayWithNull = Animal.say.bind(null)
assert.equal(myBindSayWithNull('miu', 'miu~'), bindSayWithNull('miu', 'miu~'))


const Human = function (name, age) {
    this.type = 'human'
    this.name = name
    this.age = age
}
Human.prototype.say = function (word) {
    return `type: ${this.type}, name: ${this.name}, age: ${this.age}, say: ${word}`
}

function myNew(NewClass, ...args) {
    const o = Object.create(NewClass.prototype)
    NewClass.apply(o, args)
    return o;
}

assert.ok(new Human() instanceof Human)
assert.ok(myNew(Human) instanceof Human)

assert.equal(new Human('a', 12).say('hi'), new Human('a', 12).say('hi'))

class T {

    name = 'T'

    debounce(fn, delay) {
        let timer = null
        return (...args) => {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                const result = fn.apply(this, ...args)
                timer = null
                return result
            }, delay)
        }
    }

    fn() {
        console.log(this.name)
    }
    
    exec() {
        const d = this.debounce(this.fn, 1000)
        d()
    }
}

new T().exec()

function debounce(fn, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(function () {
            const result = fn(...args)
            timer = null
            return result
        }, delay)
    }
}

function throttle(fn, delay) {
    let timer = null
    return function (...args) {
        if (timer) return
        timer = setTimeout(() => {
            console.log(this)
            const result = fn(...args)
            timer = null
            return result
        }, delay)
    }
}

const Car = {
    name: 'car',
    go: function () {
        console.log(this)
        // return `name:${this.name}`
    }
}

// d.say()

// const _ = require('lodash')
// const rs = _.debounce(willDebounce, 1000)
// console.log(rs)


// setTimeout(() => {
// const sayDebounce = debounce((word) => {
//     console.log(word)
// }, 1000)

// const sayThrottle = throttle((word) => {
//     console.log(word)
// }, 1000)


// setInterval(() => {
//     sayDebounce('debounce')
//     sayThrottle('throttle')
// }, 100)

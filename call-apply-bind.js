
const human = {
    name: 'default',
    /**
     * 如果使用哪个了箭头函数，无法获取this.name
     */
    // say: (word) => {
    //     console.log(`name is : ${this.name}, I say : ${word}`)
    // },
    say: function (word, age) {
        console.log(`name is : ${this.name}, I say : ${word} age: ${age}`)
    },
}


// human.say('default')


const humanA = {
    name: 'humanA'
}
//apply 和 call 只有一个区别，就是参数列表，apply使用数组，call使用参数列表
// human.say.call(humanA, 'aa')
// human.say.apply(humanA, ['aa'])

Function.prototype.myCall = function (thisArg, ...args) {
    if (!thisArg) thisArg = {}
    thisArg.fn = this
    const res = thisArg.fn(...args)
    delete thisArg.fn
    return res
}

// human.say.myCall(humanA, 'aa', 12)

Function.prototype.myApply = function (thisArg, args) {
    if (!thisArg) thisArg = {}
    thisArg.fn = this
    const res = thisArg.fn(...args)
    delete thisArg.fn
    return res
}
// human.say.myApply(humanA, ['aa', 13])


/**
 * appley 和 call 直接调用函数，bind是创建新函数
 */



/**
 * 无法读取到 this.humanB
 */
// const humanB = {
//     name: 'humanB',
//     say: human.say.bind(this)
// }
//name is : undefined, I say : bbb
// humanB.say('bbb')

//bind

const humanB = {
    name: 'humanB',
}

const say = human.say.bind()
say('bbb', 14)

/**
 * 如果有同名的 fn 属性，岂不是扑街了？
 */
Function.prototype.myBind = function (thisArg) {
    return (...args) => {
        if (!thisArg) thisArg = {}
        const key = Symbol()
        thisArg.key = this
        const result = thisArg.key(...args)
        delete thisArg.key
        return result
    }
}
const mySay = human.say.myBind()
mySay('ccc', 14)



/**
 * 产出的题
 */
/*

const animal = {
    name: 'default',
    // say: (word) => {
    //     console.log(`name is : ${this.name}, I say : ${word}`)
    // },
    say: function (word) {
        console.log(`name is : ${this.name}, I say : ${word}`)
    },
}
animal.say('animal')
const cat = {
    name: 'cat',
    // say: console.log(this)
    // say: function (...args) {
    //     animal.say.apply(this, args)
    // }
}
cat.say('m~')

// const dog = {
//     name: 'dog'
// }
// dog.say = animal.say.bind(dog)
// dog.say('wong~')


*/
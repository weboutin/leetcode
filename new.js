
function Animal(name) {
    console.log('new')
    this.type = 'animal'
    this.name = name
    return 'hello'
}

Animal.prototype.say = function (word) {
    return word
}

// const cat = new Animal('cat')
// console.log(cat.name)
// console.log(cat.type)
// console.log(cat.say('cat'))
function myNew(AClass, ...args) {

    // 获取 AClass 的原型
    const newObj = Object.create(AClass.prototype)

    AClass.apply(newObj, args)
    return newObj
    // 执行 AClass
    // 构造函数
    //获取 AClass 的属性

}


const cat = myNew(Animal, 'cat')
// const cat = myNew1(Animal, 'cat')
console.log(cat)
// console.log(cat.name)
// console.log(cat.type)
// console.log(cat.say('cat'))
const cat2 = new Animal('cat')
console.log(cat2)



function myNew2(...args) {
    const Constructor = args[0]
    const o = Object.create(Constructor.prototype)
    const res = Constructor.apply(o, args.slice(1))
    return res instanceof Object ? res : o
}

const cat3 = myNew2(Animal, 'cat')
// const cat = myNew1(Animal, 'cat')
console.log(cat3)
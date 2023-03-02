
var obj = {   //原数据，包含字符串、对象、函数、数组等不同的类型
    name: "test",
    main: {
        a: 1,
        b: 2
    },
    fn: function () {

    },
    friends: [1, 2, 3, [22, 33]]
}
obj.obj = obj



function shallowCopy(obj) {
    const newObj = {}
    for (const key in obj) {
        newObj[key] = obj[key]
    }
    return newObj
}


function deepCopy(obj, m = new Map()) {
    if (typeof obj == 'object' && obj != null) {
        if (m.has(obj)) {
            return m.get(obj)
        }
        const newObj = obj instanceof Array ? [] : {}
        console.log(obj)
        m.set(obj, newObj)
        for (const key in obj) {
            newObj[key] = deepCopy(obj[key], m)
        }
        return newObj
    } else {
        return obj
    }
}


// 解决循环引用的对象


console.log(deepCopy(obj))

// 使用 map 来实现深拷贝？



function deepCopy(target, h = new Map) {
    if (typeof target === 'object') {
        if (h.has(target)) return h.get(target)
        const newTarget = Array.isArray(target) ? [] : Object.create(null)
        for (const key in target) {
            newTarget[key] = deepCopy(target[key], h)
        }
        h.set(target, newTarget)
        return newTarget
    } else {
        return target
    }
}

function deepCopy(target, h = new WeakMap) {
    if (typeof target === 'object') {
        if (h.has(target)) return h.get(target)
        const newTarget = Array.isArray(target) ? [] : Object.create(null)
        for (const key in target) {
            newTarget[key] = deepCopy(target[key], h)
        }
        h.set(target, newTarget)
        return newTarget
    } else {
        return target
    }
}

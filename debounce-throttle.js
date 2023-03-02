


function throttle(fn, interval) {
    let timer = null;
    return function (...args) {
        if (timer) return
        timer = setTimeout(() => {
            timer = null
            fn.apply(this, args)
        }, interval || 0)
    }
}


function debounce(fn, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            fn.apply(this, args)
        }, delay || 0);
    }
}


/**
 * test
 * 一直触发debounce的话，事件也会一直delay
 */
// const foo = debounce(() => {
//     console.log('debounce')
// }, 2000)
// setInterval(() => {
//     foo()
// }, 30)


/**
 * throttle ，到点一定会触发一次不断触发的时间也不影响到点触发
 */
// const bar = throttle(() => {
//     console.log('throttle')
// }, 1000)
// setInterval(() => {
//     bar()
// }, 30)

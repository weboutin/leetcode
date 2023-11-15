/**
 * 2715. 执行可取消的延迟函数
 * https://leetcode.cn/problems/execute-cancellable-function-with-delay/?envType=study-plan-v2&envId=30-days-of-javascript
 */




/**
 * 76ms  45.14%
 * 40.00mb  84.41%
 */
var cancellable = function (fn, args, t) {

    let timer = setTimeout(() => {
        fn(...args)
    }, t)

    return function () {
        clearTimeout(timer)
    }

};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now() 
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr))
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *           
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
/**
 * 2723. 添加两个 Promise 对象
 * https://leetcode.cn/problems/add-two-promises/
 */



/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    const one = await promise1()

    const two = await promise2();

    return new Promise(resolve => one + two)

};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
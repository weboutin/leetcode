/**
 * 2667. 创建 Hello World 函数
 * https://leetcode.cn/problems/create-hello-world-function/
 */



/**
 * 64ms  32.24%
 * 40.8MB  58.41%
 */
var createHelloWorld = function () {
    return function (...args) {
        return 'Hello World'
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
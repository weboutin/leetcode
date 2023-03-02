/**
 * 232. 用栈实现队列 
 * https://leetcode.cn/problems/implement-queue-using-stacks/
 */

/**
 * 64ms  34.59%
 * 41.1MB  52..43%
 */
var MyQueue = function () {
    this.inStack = []
    this.outStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.inStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.outStack.length == 0) {
        this.in2out()
    }
    return this.outStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.outStack.length == 0) {
        this.in2out()
    }
    return this.outStack[this.outStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.inStack.length == 0 && this.outStack.length == 0
};

MyQueue.prototype.in2out = function () {
    while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop())
    }
};



let myQueue = new MyQueue();
let s = myQueue.push(1); // queue is: [1]
s = myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
s = myQueue.peek(); // return 1
console.log(s)
s = myQueue.pop(); // return 1, queue is [2]
console.log(s)
s = myQueue.empty(); // return false
console.log(s)
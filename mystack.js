/**
 * 225. 用队列实现栈
 * https://leetcode.cn/problems/implement-stack-using-queues/
 */

/**
 * 64ms  30.61%
 * 40.9MB  84.63%
 */
var MyStack = function () {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.stack = [x].concat(this.stack)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.stack.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.stack[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.stack.length == 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

let myStack = new MyStack();
myStack.push(1);
myStack.push(2);
s = myStack.top(); // 返回 2
console.log(s)
s = myStack.pop(); // 返回 2
console.log(s)
s = myStack.empty(); // 返回 False
console.log(s)

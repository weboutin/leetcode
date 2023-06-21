/**
 * 2619. 数组原型对象的最后一个元素
 * https://leetcode.cn/problems/array-prototype-last/
 */


/**
 * 
 * @returns 
 */
Array.prototype.last = function () {
    if (this.length == 0) return -1
    return this[this.length - 1]
};



const arr = [0];
// const arr = [1, 2, 3];
ans = arr.last(); // 3
console.log(ans)



/**
 * 
 * 170. 两数之和 III - 数据结构设计
 * https://leetcode.cn/problems/two-sum-iii-data-structure-design/submissions/
 */


/**
 * 1000ms  22.22%
 * 92.4MB  5.55%
 */
var TwoSum = function () {
    this.map = {}
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
    if (this.map[number]) {
        this.map[number]++
    } else {
        this.map[number] = 1
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
    for (key in this.map) {
        if (this.map[value - key] != undefined) {
            if (value - key == key && this.map[key] == 1) {
                continue
            }
            return true
        }
    }
    return false

};


let twoSum = new TwoSum();
// twoSum.add(0);   // [] --> [1]
// s = twoSum.find(0);   // [] --> [1]
// console.log(s)
// twoSum.add(3);   // [1] --> [1,3]
// twoSum.add(5);   // [1,3] --> [1,3,5]
// s = twoSum.find(4);  // 1 + 3 = 4，返回 true
// console.log(s)
// s = twoSum.find(7);  // 没有两个整数加起来等于 7 ，返回 false

twoSum.add(1);   // [] --> [1]
twoSum.add(3);   // [1] --> [1,3]
twoSum.add(5);   // [1,3] --> [1,3,5]
s = twoSum.find(4);  // 1 + 3 = 4，返回 true
console.log(s)
s = twoSum.find(7);  // 没有两个整数加起来等于 7 ，返回 false
console.log(s)


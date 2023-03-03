/**
 * 346. 数据流中的移动平均值
 * https://leetcode.cn/problems/moving-average-from-data-stream/
 */

/**
 * 96ms  60.71%
 * 47.3MB 50.00%
 */
var MovingAverage = function (size) {
    this.max = size
    this.arr = []
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.arr.length >= this.max) {
        this.arr.shift()
    }

    this.arr.push(val)


    let sum = 0
    for (let i = 0; i < this.arr.length; i++) {
        sum += this.arr[i]
    }

    return sum / this.arr.length

};

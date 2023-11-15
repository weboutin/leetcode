/**
 * 1656. 设计有序流
 * https://leetcode.cn/problems/design-an-ordered-stream/
 */

var OrderedStream = function (n) {

    this.stream = new Array(5)

    this.ptr = 1

};

/** 
 * 188ms  40.91%
 * 52.06mb  9.09%
 */
OrderedStream.prototype.insert = function (idKey, value) {

    this.stream[idKey - 1] = value



    const isChangePtr = this.ptr == idKey

    if (!isChangePtr) {
        return []
    }

    const result = []

    for (let i = this.ptr - 1; i < this.stream.length + 1; i++) {
        if (!this.stream[i]) {
            this.ptr = i + 1
            break
        }

        result.push(this.stream[i])
    }

    return result

};
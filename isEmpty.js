/**
 * 2727. 判断对象是否为空
 * https://leetcode.cn/problems/is-object-empty/
 */



/**
 * 68ms  22.43%
 * 41.4MB  92.82%
 */
var isEmpty = function (obj) {

    for (let i in obj) {
        return false
    }

    return true

};
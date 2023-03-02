/**
 * 171. Excel 表列序号
 * https://leetcode.cn/problems/excel-sheet-column-number/
 */

const map = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
}


/**
 * 64ms  86.41%
 * 41.8MB  60.34%
 */
var titleToNumber = function (columnTitle) {
    let value = 0
    let n = columnTitle.length
    for (let i = 0; i < columnTitle.length; i++) {
        value += Math.pow(26, n - i - 1) * map[columnTitle[i]]
    }
    return value

};
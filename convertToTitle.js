/**
 * 168. Excel表列名称
 * https://leetcode.cn/problems/excel-sheet-column-title/
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
const numberMap = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    // 26: 'Z',
    0: 'Z',
}

/**
 * 60ms  59.42%
 * 40.9MB  48.79%
 */
var convertToTitle = function (columnNumber) {
    let result = ''
    while (columnNumber > 26) {
        tmp = columnNumber % 26
        if (tmp == 0) tmp = 26
        result = numberMap[tmp] + result
        columnNumber = (columnNumber - tmp) / 26
    }
    result = numberMap[columnNumber] + result
    return result
};


function helper(str) {
    let value = 0
    let n = str.length
    for (let i = 0; i < str.length; i++) {
        value += Math.pow(26, n - i - 1) * map[str[i]]
    }
    return value
}

// const result = helper('FXSHRXW')

// console.log(result)

// columnNumber = 701
// result = convertToTitle(columnNumber)
// console.log(result)

columnNumber = 28
result = convertToTitle(columnNumber)
console.log(result)

columnNumber = 2147483647
result = convertToTitle(columnNumber)
console.log(result)

columnNumber = 52
result = convertToTitle(columnNumber)
console.log(result)
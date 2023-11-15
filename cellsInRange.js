/**
 * 2194. Excel 表中某个范围内的单元格
 * https://leetcode.cn/problems/cells-in-a-range-on-an-excel-sheet/
 */



/**
 * 60ms  92.31%
 * 45.67mb  47.69%
 */
var cellsInRange = function (s) {

    let reg = /([A-Z])(\d):([A-Z])(\d)/

    let regResult = reg.exec(s)

    const c1 = regResult[1]
    const r1 = Number(regResult[2])

    const c2 = regResult[3]
    const r2 = Number(regResult[4])

    const result = []



    for (let i = c1.charCodeAt(); i <= c2.charCodeAt(); i++) {
        for (let j = r1; j <= r2; j++) {
            result.push(`${String.fromCharCode(i)}${j}`)
        }

    }

    return result

};

s = "K1:L2"

ans = cellsInRange(s)
console.log(ans)
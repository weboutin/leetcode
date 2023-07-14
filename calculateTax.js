/**
 * 2303. 计算应缴税款总额
 * https://leetcode.cn/problems/calculate-amount-paid-in-taxes/
 */


/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {

  let sum = 0

  let _income = income

  for (let i = 0; i < brackets.length; i++) {
    if (_income < 0) {
      break
    }


    if (_income > brackets[i][0]) {

      sum += brackets[i][0] * brackets[i][1] / 100

    } else {
      sum += _income * brackets[i][1] / 100

    }

    _income = _income - brackets[i][0]


  }

  return sum

};


brackets = [[3, 50], [7, 10], [12, 25]], income = 10

ans = calculateTax(brackets, income)
console.log(ans)
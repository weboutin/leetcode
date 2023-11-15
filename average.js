/**
 * 1491. 去掉最低工资和最高工资后的工资平均值
 * https://leetcode.cn/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 */




/**
 * 36ms  100.00%
 * 39.85mb 72.73%
 */
var average = function (salary) {

    return (salary.sort((a, b) => a - b).reduce((a, b) => a + b) - salary[0] - salary[salary.length - 1]) / (salary.length - 2)

};
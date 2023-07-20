/**
 * 1678. 设计 Goal 解析器
 * https://leetcode.cn/problems/goal-parser-interpretation/
 */


/**
 * 52ms  95.95%
 * 41MB  64.86%
 */
var interpret = function (command) {

    return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al')

};
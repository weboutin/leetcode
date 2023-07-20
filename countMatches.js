/**
 * 1773. 统计匹配检索规则的物品数量
 * https://leetcode.cn/problems/count-items-matching-a-rule/
 */




/**
 * 68ms  89.90%
 * 44.9MB  40.40%
 */
var countMatches = function (items, ruleKey, ruleValue) {

    let count = 0

    for (let i = 0; i < items.length; i++) {

        if (ruleKey == 'type' && items[i][0] == ruleValue) {
            count++
        }

        if (ruleKey == 'color' && items[i][1] == ruleValue) {
            count++
        }

        if (ruleKey == 'name' && items[i][2] == ruleValue) {
            count++
        }
    }

    return count

};
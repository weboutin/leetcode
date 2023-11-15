/**
 * 2446. 判断两个事件是否存在冲突
 * https://leetcode.cn/problems/determine-if-two-events-have-conflict/
 */



/**
 * 60ms  67.31%
 * 40.10mb  25.96%
 */
var haveConflict = function (event1, event2) {

    function parse(num) {
        return parseInt(num.replace(':', ""))
    }

    if (parse(event1[0]) >= parse(event2[0]) && parse(event1[0]) <= parse(event2[1])) {
        return true
    }
    if (parse(event1[1]) >= parse(event2[0]) && parse(event1[1]) <= parse(event2[1])) {
        return true
    }
    if (parse(event2[0]) >= parse(event1[0]) && parse(event2[0]) <= parse(event1[1])) {
        return true
    }
    if (parse(event2[1]) >= parse(event1[0]) && parse(event2[0]) <= parse(event1[1])) {
        return true
    }



    return false

};
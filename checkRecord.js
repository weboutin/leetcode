/**
 * 551. 学生出勤记录 I
 * https://leetcode.cn/problems/student-attendance-record-i/
 */


/**
 * 60ms  68.83%
 * 41.1MB  73.68%
 */
var checkRecord = function (s) {
    if (s.indexOf('LLL') != -1) {
        return false
    }

    const result = s.match(/A/g)
    return result == null || result.length < 2
};


s = "PP"

checkRecord(s)
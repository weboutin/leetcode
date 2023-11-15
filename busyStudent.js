/**
 * 1450. 在既定时间做作业的学生人数
 * https://leetcode.cn/problems/number-of-students-doing-homework-at-a-given-time/
 */


/**
 * 64ms  51.47%
 * 39.81mb 100.00%
 */
var busyStudent = function (startTime, endTime, queryTime) {

    let count = 0

    for (let i = 0; i < startTime.length; i++) {

        if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
            count++
        }

    }

    return count

};
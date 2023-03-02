/**
 * 252. 会议室
 * https://leetcode.cn/problems/meeting-rooms/
 */



/**
 * 300ms  6.00%
 * 42.9MB  54.00%
 */
var canAttendMeetings = function (intervals) {
    for (let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0]
        let end = intervals[i][1]
        for (let j = 0; j < i; j++) {
            let preStart = intervals[j][0]
            let preEnd = intervals[j][1]

            if (start < preEnd && end > preStart) {
                return false
            }

            if (start > preEnd && end < preStart) {
                return false
            }
        }
    }
    return true
};



intervals = [[7, 10], [2, 4]]

// canAttendMeetings()
/**
 * 2037. 使每位学生都有座位的最少移动次数
 * https://leetcode.cn/problems/minimum-number-of-moves-to-seat-everyone/
 */



/**
 * 64ms  80.00%
 * 43.5MB  60.71%
 */
var minMovesToSeat = function (seats, students) {
    seats.sort((a, b) => a - b)
    students.sort((a, b) => a - b)

    let counter = 0

    for (let i = 0; i < seats.length; i++) {

        counter += Math.abs(seats[i] - students[i])


    }
    return counter
};
/**
 * 1185. 一周中的第几天
 * https://leetcode.cn/problems/day-of-the-week/
 */




/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */



/**
 * 52ms  84.00%
 * 40.9MB  88.00%
 */
var dayOfTheWeek = function (day, month, year) {

    //1970-1-1 Wednesday
    const weeks = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday",];

    const days = [-1, 31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let passDays = 0

    for (let i = 1970; i < year; i++) {
        passDays += isLeapYear(i) ? 366 : 365
    }

    if (isLeapYear(year)) {
        days[2] = 29
    } else {
        days[2] = 28
    }

    for (let m = 1; m < month; m++) {
        passDays += days[m]
    }

    passDays += day

    return weeks[passDays % 7]

};

function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
}


//"Saturday"
day = 31, month = 8, year = 2019
// day = 18, month = 7, year = 1999

ans = dayOfTheWeek(day, month, year)
console.log(ans)
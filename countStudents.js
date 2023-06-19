/**
 * 1700. 无法吃午餐的学生数量
 * https://leetcode.cn/problems/number-of-students-unable-to-eat-lunch/
 */




/**
 * 52ms  96.80%
 * 41MB  76.00%
 */
var countStudents = function (students, sandwiches) {
    let counter = 0;

    while (counter < students.length && students.length != 0) {
        if (students[0] == sandwiches[0]) {
            counter = 0;
            students.shift()
            sandwiches.shift()
        } else {
            students.push(students.shift())
            counter++;
        }
    }

    return students.length

};


students = [1, 1, 1, 0, 0, 1], sandwiches = [1, 0, 0, 0, 1, 1]
students = [1, 1, 0, 0], sandwiches = [0, 1, 0, 1]

ans = countStudents(students, sandwiches)
console.log(ans)
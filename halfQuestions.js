/**
 * LCS 02. 完成一半题目
 * https://leetcode.cn/problems/WqXACV/
 */



/**
 * 72ms  82.05%
 * 45.58mb  66.67%
 */
var halfQuestions = function (questions) {

    let map = {}

    let humanCount = questions.length / 2

    for (let i = 0; i < questions.length; i++) {

        if (map[questions[i]] == undefined) {
            map[questions[i]] = 1
        } else {
            map[questions[i]]++
        }

    }

    let sortArr = []

    for (let key in map) {
        sortArr.push(map[key])
    }

    sortArr.sort((a, b) => b - a)



    let type = 0

    for (let i = 0; i < sortArr.length; i++) {

        type++

        humanCount = humanCount - sortArr[i]

        if (humanCount <= 0) {
            break
        }

    }
    return type

};

questions = [2, 1, 6, 2]

ans = halfQuestions(questions)
console.log(ans)
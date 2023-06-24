/**
 * 1086. 前五科的均分
 * https://leetcode.cn/problems/high-five/?envType=list&envId=bxbmnec
 */



/**
 * 72ms  44.44%
 * 43.7MB 44.44%
 */
var highFive = function (items) {

    let arr = []

    for (let i = 0; i < items.length; i++) {

        if (arr[items[i][0]] == undefined) {
            arr[items[i][0]] = [items[i][1]]
        } else {
            arr[items[i][0]].push(items[i][1])
        }

    }

    const result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != undefined) {
            arr[i].sort((a, b) => b - a)
            let sum = 0
            for (let j = 0; j < 5; j++) {
                sum += arr[i][j]
            }

            result.push([i, Math.floor(sum / 5)])
        }
    }

    return result

};

items = [[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]]


ans = highFive(items)
console.log(ans)
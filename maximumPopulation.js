/**
 * 1854. 人口最多的年份
 * https://leetcode.cn/problems/maximum-population-year/
 */



/**
 * 68ms  59.18%
 * 41.2MB  97.96%
 */
var maximumPopulation = function (logs) {
    let max = Number.MIN_VALUE
    let maxYear = null
    for (let i = 0; i < logs.length; i++) {
        let counter = 0
        for (let j = 0; j < logs.length; j++) {
            if (logs[j][0] <= logs[i][0] && logs[j][1] > logs[i][0]) {
                counter++
            }

        }
        // console.log(`year ${logs[i][0]} counter = ${counter}`)
        if (counter > max) {
            max = counter
            maxYear = logs[i][0]
        } else if (counter == max) {
            maxYear = Math.min(logs[i][0], maxYear)
        }
    }

    return maxYear
};

logs = [[1950, 1961], [1960, 1971], [1970, 1981]]

// logs = [[2033, 2034], [2039, 2047], [1998, 2042], [2047, 2048], [2025, 2029], [2005, 2044], [1990, 1992], [1952, 1956], [1984, 2014]]

ans = maximumPopulation(logs)
console.log(ans)
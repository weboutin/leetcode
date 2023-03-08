/**
 * 495. 提莫攻击
 * https://leetcode.cn/problems/teemo-attacking/
 */



/**
 *  超时
 */
var findPoisonedDuration = function (timeSeries, duration) {

    let s = new Set()

    for (let i = 0; i < timeSeries.length; i++) {

        for (j = 0; j < duration; j++) {
            s.add(timeSeries[i] + j)
        }
    }

    return s.size
};

/**
 * 68ms  56.00%
 * 44.2MB  97.43%
 */
var findPoisonedDuration = function (timeSeries, duration) {

    let sum = duration

    for (let i = 1; i < timeSeries.length; i++) {
        let lastIndex = timeSeries[i - 1] + duration - 1

        sum += Math.min(timeSeries[i] + duration - 1 - lastIndex, duration)

    }

    return sum
};

timeSeries = [1, 4], duration = 2 // 4

s = findPoisonedDuration(timeSeries, duration)
console.log(s)
timeSeries = [1, 2], duration = 2 // 3

s = findPoisonedDuration(timeSeries, duration)
console.log(s)
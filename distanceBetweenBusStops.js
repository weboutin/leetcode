/**
 * 1184. 公交站间的距离
 * https://leetcode.cn/problems/distance-between-bus-stops/
 */

/**
 * 56ms  91.30%
 * 40.9MB  93.48%
 */
var distanceBetweenBusStops = function (distance, start, destination) {


    let sum = 0

    let min = Math.min(start, destination)
    let max = Math.max(start, destination)

    let dSum = 0


    for (let i = 0; i < distance.length; i++) {
        sum += distance[i]

        if (i >= min && i < max) {
            dSum += distance[i]
        }
    }

    return Math.min(dSum, sum - dSum)


};


distance = [1, 2, 3, 4], start = 0, destination = 2
distance = [1, 2, 3, 4], start = 0, destination = 1


ans = distanceBetweenBusStops(distance, start, destination)
console.log(ans)
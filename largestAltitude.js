/**
 * 1732. 找到最高海拔
 * https://leetcode.cn/problems/find-the-highest-altitude/
 */

/**
 * 52ms  95.05%
 * 41.1MB  51.49%
 */
var largestAltitude = function (gain) {
    let max = 0
    let altitude = 0

    for (let i = 0; i < gain.length; i++) {

        altitude = altitude + gain[i]

        max = Math.max(max, altitude)

    }


    return max
};


gain = [-4, -3, -2, -1, 4, 3, 2]
gain = [-5, 1, 5, 0, -7]

ans = largestAltitude(gain)
console.log(ans)
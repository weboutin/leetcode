/**
 * 1266. 访问所有点的最小时间
 * https://leetcode.cn/problems/minimum-time-visiting-all-points/
 */





/**
 * over time
 */
var minTimeToVisitAllPoints = function (points) {

    let counter = 0

    let x = points[0][0]
    let y = points[0][1]

    for (let i = 1; i < points.length; i++) {
        while (x != points[i][0] || y != points[i][1]) {
            counter++
            if (x < points[i][0] && y < points[i][1]) {
                x++
                y++
            } else if (x > points[i][0] && y > points[i][1]) {
                x--
                y--
            } else if (x < points[i][0] && y == points[i][1]) {
                x++
            } else if (x > points[i][0] && y == points[i][1]) {
                x--
            } else if (x == points[i][0] && y < points[i][1]) {
                y++
            } else if (x == points[i][0] && y > points[i][1]) {
                y--
            }
        }

    }


    return counter

};

/**
 * 68ms  46.00%
 * 41.7MB  70.00%
 */
var minTimeToVisitAllPoints = function (points) {

    let counter = 0


    for (let i = 0; i < points.length - 1; i++) {

        counter += Math.max(Math.abs(points[i][0] - points[i + 1][0]), Math.abs(points[i][1] - points[i + 1][1]))

    }


    return counter

};

points = [[1, 1], [3, 4], [-1, 0]]
points = [[3, 2], [-2, 2]]

ans = minTimeToVisitAllPoints(points)
console.log(ans)
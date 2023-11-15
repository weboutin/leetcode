/**
 * 1725. 可以形成最大正方形的矩形数目
 * https://leetcode.cn/problems/number-of-rectangles-that-can-form-the-largest-square/
 */



/**
 * 68ms  77.78%
 * 43.38mb  42.59%
 */
var countGoodRectangles = function (rectangles) {

    const arr = rectangles.map(e => Math.min(e[0], e[1])).sort((a, b) => b - a)


    let count = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == arr[0]) {
            count++
        } else {
            return count
        }

    }

    return count


};
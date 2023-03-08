/**
 * 492. 构造矩形
 * https://leetcode.cn/problems/construct-the-rectangle/
 */

/**
 * 52ms  98.47%
 * 40.8MB  84.73%
 */
var constructRectangle = function (area) {
    let w = parseInt(Math.sqrt(area))

    while (area % w != 0) {
        w--
    }

    return [area / w, w]
};


area = 4
constructRectangle(area)
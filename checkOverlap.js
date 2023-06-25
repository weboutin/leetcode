/**
 * 1401. 圆和矩形是否有重叠
 * https://leetcode.cn/problems/circle-and-rectangle-overlapping/
 */


/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
    function distance(ux, uy, vx, vy) {
        return (ux - vx) ** 2 + (uy - vy) ** 2
    }

    /* 圆心在矩形内部 */
    if (x1 <= xCenter && xCenter <= x2 && y1 <= yCenter && yCenter <= y2) {
        return true;
    }
    /* 圆心在矩形上部*/
    if (x1 <= xCenter && xCenter <= x2 && y2 <= yCenter && yCenter <= y2 + radius) {
        return true;
    }
    /* 圆心在矩形下部*/
    if (x1 <= xCenter && xCenter <= x2 && y1 - radius <= yCenter && yCenter <= y1) {
        return true;
    }
    /* 圆心在矩形左部*/
    if (x1 - radius <= xCenter && xCenter <= x1 && y1 <= yCenter && yCenter <= y2) {
        return true;
    }
    /* 圆心在矩形右部*/
    if (x2 <= xCenter && xCenter <= x2 + radius && y1 <= yCenter && yCenter <= y2) {
        return true;
    }
    /* 矩形左上角 */
    if (distance(xCenter, yCenter, x1, y2) <= radius * radius) {
        return true;
    }
    /* 矩形左下角 */
    if (distance(xCenter, yCenter, x1, y1) <= radius * radius) {
        return true;
    }
    /* 矩形右上角 */
    if (distance(xCenter, yCenter, x2, y2) <= radius * radius) {
        return true;
    }
    /* 矩形右下角 */
    if (distance(xCenter, yCenter, x1, y2) <= radius * radius) {
        return true;
    }



    return false

};

//true
radius = 1, xCenter = 0, yCenter = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1

//false
// radius = 1, xCenter = 1, yCenter = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1

//true
// radius = 1, xCenter = 0, yCenter = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1
radius = 5, xCenter = 8, yCenter = 8, x1 = 9, y1 = 5, x2 = 12, y2 = 8

ans = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2)
console.log(ans)
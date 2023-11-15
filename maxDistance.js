/**
 * 2078. 两栋颜色不同且距离最远的房子
 * https://leetcode.cn/problems/two-furthest-houses-with-different-colors/
 */




/**
 * 64ms  65.31%
 * 40.07mb  55.10%
 */
var maxDistance = function (colors) {

    let max = 0

    for (let i = 0; i < colors.length; i++) {

        for (let j = colors.length - 1; j > i; j--) {
            if ((j - i) < max) {
                break
            }

            if (colors[j] != colors[i]) {
                max = Math.max(max, j - i)
            }

        }

    }

    return max

};
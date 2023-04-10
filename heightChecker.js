/**
 * 1051. 高度检查器
 * https://leetcode.cn/problems/height-checker/
 */



/**
 * 56ms  89.43%
 * 41MB  77.24%
 */
var heightChecker = function (heights) {
    const tmp = JSON.parse(JSON.stringify(heights)).sort((a, b) => a - b)
    let counter = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != tmp[i]) {
            counter++
        }

    }

    return counter
};


heights = [1, 1, 4, 2, 1, 3]


heightChecker(heights)
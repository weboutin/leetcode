/**
 * 796. 旋转字符串
 * https://leetcode.cn/problems/rotate-string/
 */



/**
 * 56ms  86.14%
 * 41.2MB  28.72%
 */
var rotateString = function (s, goal) {
    //旋转 0 次
    if (s == goal) return true
    rotate = s.slice(1, s.length) + s.slice(0, 1)

    while (s != rotate) {
        if (rotate == goal) return true
        rotate = rotate.slice(1, rotate.length) + rotate.slice(0, 1)
    }

    return false

};


s = "abcde", goal = "cdeab"


ans = rotateString(s, goal)
console.log(ans)
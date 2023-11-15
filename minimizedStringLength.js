/**
 * 2716. 最小化字符串长度
 * https://leetcode.cn/problems/minimize-string-length/
 */



/**
 * 128ms  55.24%
 * 46.78mb  84.76%
 */
var minimizedStringLength = function (s) {

    const set = new Set()

    for (let i = 0; i < s.length; i++) {
        set.add(s[i])
    }

    return set.size

};
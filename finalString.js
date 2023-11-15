/**
 * 2810. 故障键盘
 * https://leetcode.cn/problems/faulty-keyboard/
 */




/**
 * 128ms  100.00%
 * 47.92mb  100.00%
 */
var finalString = function (s) {

    let result = ''

    for (let i = 0; i < s.length; i++) {

        if (s[i] != 'i') {
            result += s[i]
        } else {
            result = revers(result)
        }

    }

    function revers(str) {

        let result = ''

        for (let i = 0; i < str.length; i++) {

            result += str[str.length - 1 - i]

        }

        return result
    }

    return result

};
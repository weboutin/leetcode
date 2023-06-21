/**
 * 1694. 重新格式化电话号码
 * https://leetcode.cn/problems/reformat-phone-number/
 */


/**
 * 56ms  92.54%
 * 41.3MB  55.22%
 */
var reformatNumber = function (number) {
    if (number.length == 3) return number

    number = number.replace(/-|\s/g, '')

    let result = ''

    while (number.length > 4) {
        result += `${number.slice(0, 3)}-`

        number = number.slice(3)
    }

    if (number.length == 4) {
        result += `${number[0]}${number[1]}-${number[2]}${number[3]}`
    } else {
        result += number
    }

    return result


};


number = "1-23-45 6"

ans = reformatNumber(number)
console.log(ans)
/**
 * 1957. 删除字符使字符串变好
 * https://leetcode.cn/problems/delete-characters-to-make-fancy-string/?envType=list&envId=bxbmnec
 */



/**
 * 156ms  75.51%
 * 51.9MB  100.00%
 */
var makeFancyString = function (s) {
    let result = ''
    let same = ''
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == same) {
            count++
        } else {
            same = s[i]
            count = 1
        }
        if (count < 3) {
            result += s[i]
        }

    }
    return result
};

s = "leeetcode"
s = "aaabaaaa"
ans = makeFancyString(s)
console.log(ans)
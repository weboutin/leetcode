/**
 * 1119. 删去字符串中的元音
 * https://leetcode.cn/problems/remove-vowels-from-a-string/?envType=list&envId=bxbmnec
 */


/**
 * 56ms  80.00%
 * 40.8MB  100.00%
 */
var removeVowels = function (s) {
    let vowelsReg = /a|e|i|o|u/g
    return s.replace(vowelsReg, '')
};


s = "leetcodeisacommunityforcoders"

ans = removeVowels(s)

console.log(ans)
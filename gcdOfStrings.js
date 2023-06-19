/**
 * 1071. 字符串的最大公因子
 * https://leetcode.cn/problems/greatest-common-divisor-of-strings/?envType=list&envId=bxbmnec
 */


/**
 * 72ms  27.36%
 * 47MB  5.70%
 */
var gcdOfStrings = function (str1, str2) {

    let index = 0;

    let result = ''

    let match = ''

    while (index < str1.length && index < str2.length) {
        result += str1[index]
        if (helper(str1, result) && helper(str2, result)) {
            match = result
        }
        index++

    }

    return match

};


function helper(str, word) {
    let len = word.length;
    for (let i = 0; i < str.length; i = i + len) {
        if (word != str.slice(i, i + len)) {
            return false
        }
    }
    return true
}

str1 = "ABABAB", str2 = "ABAB"
// str1 = "ABCABC", str2 = "ABC"
// str1 = "LEET", str2 = "CODE"

// should be   "ABAB"
str1 = "ABABABAB", str2 = "ABAB"

ans = gcdOfStrings(str1, str2)
console.log(ans)

// ans = helper(str2, 'AB')
// console.log(ans)


// console.log('abab'.slice(2, 2))
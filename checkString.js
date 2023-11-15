/**
 * 2124. 检查是否所有 A 都在 B 之前
 * https://leetcode.cn/problems/check-if-all-as-appears-before-all-bs/?envType=list&envId=bxbmnec
 */




/**
 * 60ms  72.55%
 * 40.05mb  60.78%
 */
var checkString = function (s) {

    let a = s.lastIndexOf('a')

    let b = s.indexOf('b')

    if (b == -1) return true

    return b > a


};

// s = "aaabbb"
// s = "abab"
s = "bbb"
s = "a"

ans = checkString(s)
console.log(ans)
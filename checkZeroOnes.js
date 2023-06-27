/**
 * 1869. 哪种连续子字符串更长
 * https://leetcode.cn/problems/longer-contiguous-segments-of-ones-than-zeros/?envType=list&envId=bxbmnec
 */


/**
 * 76ms  17.84%
 * 41.3MB  60.71%
 */
var checkZeroOnes = function (s) {
    let maxOne = 0;
    let maxZero = 0;

    let tmpOne = 0
    let tmpZero = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '1') {
            tmpOne++
        } else {
            maxOne = Math.max(tmpOne, maxOne)
            tmpOne = 0
        }

        if (s[i] == '0') {
            tmpZero++
        } else {
            maxZero = Math.max(tmpZero, maxZero)
            tmpZero = 0
        }


    }
    maxOne = Math.max(maxOne, tmpOne)
    maxZero = Math.max(maxZero, tmpZero)

    return maxOne > maxZero

};


s = "1101"
// s = "111000"
// s = "110100010"
s = "1"
s = "0"

ans = checkZeroOnes(s)
console.log(ans)
/**
 * 1763. 最长的美好子字符串
 * https://leetcode.cn/problems/longest-nice-substring/?envType=list&envId=bxbmnec
 */



/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    let maxStr = ''

    let tmpObj = {
        str: '',
        nice: false,
    }

    for (let i = 0; i < s.length; i++) {
        if (Math.abs(s[i].charCodeAt() - (tmpObj.str[tmpObj.str.length - 1] || '').charCodeAt()) == 32) {
            tmpObj.str += s[i]
            tmpObj.nice = true
        } else if (s[i] == tmpObj.str[tmpObj.str.length - 1]) {
            tmpObj.str += s[i]
        } else {
            tmpObj.str = s[i]
            tmpObj.nice = false
        }

        // if (maxStr.length < tmpObj.str.length && tmpObj.nice) {
        //     maxStr = tmpObj.str
        // }


    }

    return maxStr

};


s = "YazaAay"
// s = "DdDdDzeEddddD"
// s = "c"

ans = longestNiceSubstring(s)
console.log(ans)
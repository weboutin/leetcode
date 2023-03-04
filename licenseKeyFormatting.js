/**
 * 482. 密钥格式化
 * https://leetcode.cn/problems/license-key-formatting/ 
 */


/**
 * 76ms  60.53%
 * 47MB  57.89%
 */
var licenseKeyFormatting = function (s, k) {
    let newKey = ''
    let tmpKey = ''
    for (let i = s.length - 1; i >= 00; i--) {
        if (s[i] != '-' && tmpKey.length < k) {
            tmpKey = `${s[i].toUpperCase()}${tmpKey}`
        }
        if (tmpKey.length == k) {
            newKey = newKey.length == 0 ? `${tmpKey}` : `${tmpKey}-${newKey}`
            tmpKey = ''
        }
    }

    return tmpKey.length == 0 ?
        newKey :
        newKey.length == 0 ?
            tmpKey :
            `${tmpKey}-${newKey}`
};

S = "2-5g-3-J", k = 2
// S = "5F3Z-2e-9-w", k = 4

S = "2", k = 2

ans = licenseKeyFormatting(S, k)
console.log(ans)
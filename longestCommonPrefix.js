

/**
 * 76ms
 * 42.5MB
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 1) {
        return strs[0]
    }
    const result = []
    for (let i = 0; i < strs[0].length; i++) {
        for (let m = 1; m < strs.length; m++) {
            if (strs[0][i] != strs[m][i]) {
                return result.join('')
            }
        }
        result.push(strs[0][i])
    }
    return result.join('')
};



strs = ["flower", "flow", "flight"]

strs = ["flower", "flower", "flower", "flower"]



console.log(longestCommonPrefix(strs))
/**
 * 1528. 重新排列字符串
 * https://leetcode.cn/problems/shuffle-string/?envType=list&envId=bxbmnec
 */


/**
 * 64ms  82.18%
 * 43.8MB  12.87%
 */
var restoreString = function (s, indices) {

    let result = []

    for (let i = 0; i < indices.length; i++) {
        result[indices[i]] = s[i]
    }

    return result.join('')

};
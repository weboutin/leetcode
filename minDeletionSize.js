/**
 * 944. 删列造序
 * https://leetcode.cn/problems/delete-columns-to-make-sorted/
 */



/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < strs[0].length; j++) {
            if (strs[i][j].charCodeAt() < strs[i - 1][j].charCodeAt()) {
                return i
            }

        }
    }

    return 0
};


strs = ["cba", "daf", "ghi"]
ans = minDeletionSize(strs)

console.log(ans)
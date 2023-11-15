/**
 * 1313. 解压缩编码列表
 * https://leetcode.cn/problems/decompress-run-length-encoded-list/
 */


/**
 * 84ms  28.38%
 * 42.02mb  91.89%
 */
var decompressRLElist = function (nums) {

    const result = []


    for (let i = 0; i < nums.length; i = i + 2) {

        for (let j = 0; j < nums[i]; j++) {

            result.push(nums[i + 1])

        }

    }


    return result

};
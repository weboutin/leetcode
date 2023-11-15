/**
 * 1598. 文件夹操作日志搜集器
 * https://leetcode.cn/problems/crawler-log-folder/?envType=list&envId=bxbmnec
 */



/**
 * 52ms  96.23%
 * 40.25mb  60.38%
 */
var minOperations = function (logs) {
    let count = 0

    for (let i = 0; i < logs.length; i++) {
        if (logs[i] == '../') {
            if (count != 0)
                count--
        } else if (logs[i] == './') {
            // do nothing
        } else {
            count++
        }
    }

    return count

};
/**
 * 1399. 统计最大组的数目
 * https://leetcode.cn/problems/count-largest-group/?envType=list&envId=bxbmnec
 */



/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {

    let maxCount = 0;
    let map = {}

    /**
     * 计算每位和
     */
    function cacl(n) {
        const s = n.toString()
        let sum = 0
        for (let i = 0; i < s.length; i++) {
            sum += Number(i)
        }
        return sum
    }

    for (let i = 1; i <= n; i++) {
        let result = cacl(i)
        if (map[result] == undefined) {
            map[result] = 1
        } else {
            map[result]++
        }
    }


    return maxCount

};
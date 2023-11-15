/**
 * LCP 55. 采集果实
 * https://leetcode.cn/problems/PTXy4P/
 */


/**
 * @param {number[]} time
 * @param {number[][]} fruits
 * @param {number} limit
 * @return {number}
 */
var getMinimumTime = function (time, fruits, limit) {

    let count = 0


    for (let i = 0; i < fruits.length; i++) {

        //单次可采集数
        let single = time[fruits[i][0]]

        count += Math.ceil(fruits[i][1] / single)

    }

    return count

};
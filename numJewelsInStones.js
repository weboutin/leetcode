/**
 * 771. 宝石与石头
 * https://leetcode.cn/problems/jewels-and-stones/
 */


/**
 * 64ms  55.41%
 * 41.1MB 83.12%
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.indexOf(stones[i]) > -1) {
            count++;
        }
    }
    return count;
};


jewels = "aA", stones = "aAAbbbb"

numJewelsInStones(jewels, stones)
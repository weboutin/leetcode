/**
 * 1046. 最后一块石头的重量
 * https://leetcode.cn/problems/last-stone-weight/
 */



/**
 * 52ms  97.47%
 * 41.7MB  81.31%
 */
var lastStoneWeight = function (stones) {
    stones.sort((a, b) => a - b)

    while (stones.length > 1) {
        let most = stones.pop()
        let second = stones.pop()

        let newOne = most - second

        if (newOne != 0) {
            let idx = 0
            while (stones[idx] < newOne) {
                idx++
            }
            stones = stones.slice(0, idx).concat([newOne]).concat(stones.slice(idx))
        }
    }

    return stones[0] || 0
};


stones = [1, 3]
stones = [2, 7, 4, 1, 8, 1]
ans = lastStoneWeight(stones)
console.log(ans)
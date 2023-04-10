/**
 * 1217. 玩筹码
 * https://leetcode.cn/problems/minimum-cost-to-move-chips-to-the-same-position/
 */




/**
 * 56ms  82.89%
 * 41MB  65.79%
 */
var minCostToMoveChips = function (position) {
    let odd = 0
    let even = 0

    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2 == 0) {
            even++
        } else {
            odd++
        }
    }

    return Math.min(odd, even)

};

position = [1, 2, 3]

// position = [2, 2, 2, 3, 3]
ans = minCostToMoveChips(position)
console.log(ans)
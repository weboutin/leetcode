/**
 * 657. 机器人能否返回原点
 * https://leetcode.cn/problems/robot-return-to-origin/
 */


/**
 * 56ms  98.02%
 * 41.6MB  89.11%
 */
var judgeCircle = function (moves) {
    let U = 0
    let D = 0
    let L = 0
    let R = 0

    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'U': U++; break
            case 'D': D++; break
            case 'L': L++; break
            case 'R': R++; break
        }
    }


    return U == D && L == R
};


moves = "LL"

ans = judgeCircle(moves)
console.log(ans)
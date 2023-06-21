/**
 * 1275. 找出井字棋的获胜者
 * https://leetcode.cn/problems/find-winner-on-a-tic-tac-toe-game/?envType=list&envId=bxbmnec
 */



/**
 * 60ms  80.00%
 * 41.1MB  84.00%
 */
var tictactoe = function (moves) {
    wins = [
        '0_0,0_1,0_2',
        '1_0,1_1,1_2',
        '2_0,2_1,2_2',
        '0_0,1_0,2_0',
        '0_1,1_1,2_1',
        '0_2,1_2,2_2',
        '0_0,1_1,2_2',
        '0_2,1_1,2_0',
    ]

    //最后一位单数，判断A的胜负，否则判断B是否胜利
    let steps = []

    let start = moves.length % 2 == 0 ? 1 : 0

    for (let i = start; i < moves.length; i = i + 2) {
        steps.push(`${moves[i][0]}_${moves[i][1]}`)
    }

    if (steps.length >= 3) {
        for (let i = 0; i < wins.length; i++) {

            let score = 0
            for (let j = 0; j < steps.length; j++) {
                if (wins[i].indexOf(steps[j]) > -1) {
                    score++
                }

            }
            if (score == 3) {
                return start == 0 ? 'A' : 'B'
            }

        }
    }

    // 走了9步仍然没有胜负
    if (moves.length == 9) {
        return 'Draw'
    } else {
        return 'Pending'
    }

};

//A
moves = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]

//B
moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]


//Draw
moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]

//Pending
// moves = [[0,0],[1,1]]

ans = tictactoe(moves)
console.log(ans)
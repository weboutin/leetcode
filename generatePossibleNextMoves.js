/**
 * 293. 翻转游戏
 * https://leetcode.cn/problems/flip-game/
 */



/**
 * 88ms 0.00%
 * 44.9MB  12.50%
 */
var generatePossibleNextMoves = function (currentState) {
    let result = []
    let initArr = currentState.split('')
    let arr = JSON.parse(JSON.stringify(initArr))
    for (let i = 0; i < arr.length - 1; i++) {
        arr = JSON.parse(JSON.stringify(initArr))
        if (arr[i] == '+' && arr[i + 1] == '+') {
            arr[i] = '-'
            arr[i + 1] = '-'
            result.push(arr.join(''))
        }
    }

    return result
};


/**
 * 56ms  75.00%
 * 41.3MB 652.50%
 */
var generatePossibleNextMoves = function (currentState) {
    let result = []
    for (let i = 0; i < currentState.length - 1; i++) {
        if (currentState[i] == '+' && currentState[i + 1] == '+') {
            result.push(currentState.slice(0, i) + '--' + currentState.slice(i + 2))
        }
    }

    return result
};

currentState = "++++"


s = generatePossibleNextMoves(currentState)
console.log(s)
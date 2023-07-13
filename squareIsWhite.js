/**
 * 1812. 判断国际象棋棋盘中一个格子的颜色
 * https://leetcode.cn/problems/determine-color-of-a-chessboard-square/?envType=list&envId=bxbmnec
 */




/**
 * 60ms  57.14%
 * 40.7MB  87.14%
 */
var squareIsWhite = function (coordinates) {

  const left = Number(coordinates[0].charCodeAt())

  const right = Number(coordinates[1])

  return !(left % 2 == right % 2)

};


coordinates = "a1"
// coordinates = "b2"

ans = squareIsWhite(coordinates)
console.log(ans)
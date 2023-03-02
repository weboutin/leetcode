/**
 * 72 ms
 * 43.4 MB
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let setLine = new Set();
        let setCol = new Set();
        let setBox = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.' && setLine.has(board[i][j])) {
                return false;
            }
            setLine.add(board[i][j])
            if (board[j][i] != '.' && setCol.has(board[j][i])) {
                return false;
            }
            setCol.add(board[j][i])
            // 没搞明白这个位置啊。
            let a = Math.floor((i / 3)) * 3 + Math.floor(j / 3)
            let b = Math.floor((i % 3)) * 3 + Math.floor(j % 3)
            if (board[a][b] != '.' && setBox.has(board[a][b])) {
                return false;
            }
            setBox.add(board[a][b])
        }
    }

    return true
};


board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


console.log(isValidSudoku(board))
'use strict'


function setMinesNegsCount(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            board[i][j].minesAroundCount = countNeighbors(i, j, board)
        }
    }
}

function countNeighbors(rowIdx, colIdx, board) {
    var count = 0

    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= board[0].length) continue
            if (i === rowIdx && j === colIdx) continue

            if (board[i][j].isMine) count++
        }
    }
    return count
}

function setMinesRandom(gBoard) {
    var minesPlaced = 0

    while (minesPlaced < gLevel.MINES) {
        var i = getRandomInt(0, gLevel.SIZE)
        var j = getRandomInt(0, gLevel.SIZE)

        if (!gBoard[i][j].isMine) {
            gBoard[i][j].isMine = true
            minesPlaced++
        }
    }
}

function revealAllMines() {
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            if (gBoard[i][j].isMine) {
                gBoard[i][j].isRevealed = true
            }
        }
    }
}


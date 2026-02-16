'use strict'


var bomb

function createBomb(board) {
    // TODO: initialize gPacman...
    bomb = {
        pos: { i: 5, j: 5 },
        isSuper: false,
    }
    board[gPacman.pos.i][gPacman.pos.j] = PACMAN
}

function setMinesNegsCount () {
    // TODO: count and set the minesAroundCount for each cell
}


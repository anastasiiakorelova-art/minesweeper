'use strict'

const GHOST = '&#9781'
var gGhosts = []

var gGhostsInterval

function createGhosts(board) {
    // TODO: Create 3 ghosts and an interval
    for (var i = 0; i < 3; i++){
        createGhost(board)
    }
    gGhostsInterval = setInterval(moveGhosts, 1000)
}

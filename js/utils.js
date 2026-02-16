'use strict'

function renderBoard(mat, selector) {

    var strHTML = '<table><tbody>'
    for (var i = 0; i < mat.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < mat[0].length; j++) {

            const cell = mat[i][j]
            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}">${cell}</td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'
    
    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}

function onRestartBtnClick() {
    gBoard = buildBoard()
    renderBoard(gBoard)
}

// pos is an object like this - { i: 2, j: 7 }
function renderCell(pos, value) {
    // Select the elCell and set the value
    const elCell = document.querySelector(`.cell-${pos.i}-${pos.j}`)
    elCell.innerHTML = value
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function onCellClicked(elCell, i, j) {
    //todo: get the value and update the model - called when the sell is clicked 
}


function onCellMarked(elCell, i, j) {
    //todo: mark cell as a flag - called on right click
}

function checkGameOver() {
    //todo: The game ends when all mines are marked, and all the other cells are revealed
}

function expandReveal(board, elCell, i, j) {
    /*
    todo:
    When the user clicks a cell with no mines around, reveal not 
    only that cell, but also its neighbors. 

    NOTE: start with a basic implementation that only  reveals the non-mine 1st
    degree neighbors 

    */ 
}

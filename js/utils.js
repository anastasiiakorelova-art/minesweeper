'use strict'



function renderBoard(board,selector) {
   var strHTML = '<table><tbody>'

    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'

        for (var j = 0; j < board[0].length; j++) {

            var cell = board[i][j]
            var className = 'cell'

            if (cell.isRevealed) className += ' revealed'

            strHTML += `
            <td class="${className}"
                onclick="onCellClicked(this, ${i}, ${j})"
                oncontextmenu="onCellMarked(event, this, ${i}, ${j})">
                ${getCellContent(cell)}
            </td>`
        }

        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'
    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}


function onRestartBtnClick() {
    gBoard = buildBoard()
    renderBoard(gBoard, '.board-container')
}

// pos is an object like this - { i: 2, j: 7 }
function renderCell(pos, value) {
    // Select the elCell and set the value
    const elCell = document.querySelector(`.cell-${pos.i}-${pos.j}`)
    elCell.innerHTML = value
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function onCellClicked(elCell, i, j) {

    //todo: get the value and update the model - called when the sell is clicked 
    if (!gGame.isOn) return

    var cell = gBoard[i][j]

    if (cell.isRevealed || cell.isMarked) return

    cell.isRevealed = true
    gGame.revealedCount++

    if (cell.isMine) {
        revealAllMines()
        gGame.isOn = false
        alert('Game Over')
        return
    }

    renderBoard(gBoard, '.board-container')
    checkGameOver()
}


function getCellContent(cell) {
    if (!cell.isRevealed) return ''

    if (cell.isMine) return '<img src="img/bomb.svg">' //  return '💣'

    if (cell.minesAroundCount === 0) return ''

    return cell.minesAroundCount
}

function onCellMarked(ev, elCell, i, j) {
    //todo: mark cell as a flag - called on right click
    ev.preventDefault()

    var cell = gBoard[i][j]
    if (cell.isRevealed) return

    cell.isMarked = !cell.isMarked
    gGame.markedCount += cell.isMarked ? 1 : -1

    elCell.innerText = cell.isMarked ? '<img src="img/flag.svg">' : '' // '🚩' : ''
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

function checkGameOver() {
    var totalCells = gLevel.SIZE * gLevel.SIZE
    var safeCells = totalCells - gLevel.MINES

    if (gGame.revealedCount === safeCells) {
        gGame.isOn = false
        alert('YOU WIN!')
    }
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

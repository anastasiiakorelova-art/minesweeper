'use strict'

const BOMB = 'img/bomb.svg'
const ONE = 'img/1.svg' 
const TWO = 'img/2.svg'
const THREE = 'img/3.svg'
const FOUR = 'img/4.svg'
const FIVE = 'img/5.svg'
const SIX = 'img/6.svg'
const EMPTY = ' '
//////
var gBoard = { 
 minesAroundCount: 4, 
 isRevealed: false, 
 isMine: false, 
 isMarked: false 
} 
 
const gLevel = { 
 SIZE: 4, 
 MINES: 2 
} 

const gGame = { 
 isOn: false, 
 revealedCount: 0, 
 markedCount: 0, 
 secsPassed: 0 
} 


function init() {
    console.log('hello')

    gBoard = buildBoard()
    renderBoard(gBoard, '.board-container')
    gGame.isOn = true
}

function buildBoard() {
    const size = 4
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([])

        for (var j = 0; j < size; j++) {
            board[i][j] = EMPTY      
        }
    }
    return board
    // todo: Set some mines and Call setMinesNegsCount() 
}

function updateBombs() {
    // update model
    gGame.revealedCount += 1
    
    // update DOM
    const elScore = document.querySelector('.bombs-to-reveal span')
    elScore.innerText = gGame.score
}

function gameOver() {
    console.log('Game Over')
    const elScore = document.querySelector('.restart-btn')
    elScore.innerText = '<img src = "img/face-smile.svg" alt="Restart" height="40px">'
    gGame.isOn = false
}
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
var gBoard 

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

    gGame.isOn = true
    gBoard = buildBoard()
    setMinesRandom(gBoard)
    setMinesNegsCount(gBoard)
    renderBoard(gBoard, '.board-container')
}

function buildBoard() {
    var board = []

    for (var i = 0; i < gLevel.SIZE; i++) {
        board[i]=[]

        for (var j = 0; j < gLevel.SIZE; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isRevealed: false,
                isMine: false,
                isMarked: false
            }
        }
    }
    return board
}


function gameOver() {
    console.log('Game Over')
    const elScore = document.querySelector('.restart-btn')
    elScore.innerText = '<img src = "img/face-cry.svg" alt="Restart" height="40px">'
    gGame.isOn = false
}
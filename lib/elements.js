
    export const grid = document.querySelector('.grid')
    export let squares = Array.from(document.querySelectorAll('.grid div'))
    export const scoreDisplay = document.querySelector('#score')
    export const startBtn = document.querySelector('#start-button')
    export const width = 10
    export let nextRandom = 0
    export let timerId
    export let score = 0
    export const colors = [
      'orange',
      'red',
      'purple',
      'green',
      'blue'
    ]
    
    //show up-next tetromino in mini-grid display
    export const displaySquares = document.querySelectorAll('.mini-grid div')
    export const displayWidth = 4
    export const displayIndex = 0

    //the Tetrominos without rotations
    export const upNextTetrominoes = [
        [1, displayWidth+1, displayWidth*2+1, 2], //lTetromino
        [0, displayWidth, displayWidth+1, displayWidth*2+1], //zTetromino
        [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
        [0, 1, displayWidth, displayWidth+1], //oTetromino
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
        ]
        
    
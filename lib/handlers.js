    import {startBtn, timerId, nextRandom} from './elements.js'
    import {theTetrominoes} from './tetrominos.js'
    import {draw, moveDown, displayShape} from './utils.js'
    
    //add functionality to the button
    startBtn.addEventListener('click', () => {
        if (timerId) {
          clearInterval(timerId)
          timerId = null
        } else {
          draw()
          timerId = setInterval(moveDown, 1000)
          nextRandom = Math.floor(Math.random()*theTetrominoes.length)
          displayShape()
        }
      })
### Randomly Select a Tetromino and its first rotation 
```js
// Randomly selects a number 
let random = Math.floor(Math.random()*theTetrominoes.length)
// uses value of `random`  to select a shape in `theTetrominoes` array rotation as well
let current = theTetrominoes[random][currentRotation]
console.log(random)

//draw the Tetromino
function draw() {
    //
    current.forEach(index => {
        // draws the tetromino on squares grid  and set styles
        sqaures[currentPositon + index].classList.add('tetromino')
        squares[currentPosition + index].style.backgroundColor = colors[random]
    })
}

//undraw the Tetromino
function undraw(){
    current.forEach(index => {
        sqaures[currentPosition + index].classList.remove('tetromino')
        sqaures[currentPosition + index].style.backgroundColor = ''
    })
}

```

### assign functions to keyCodes
```js
// when user presses specified key fire function 
function control(e) {
    if(e.keyCode === 37) {
        moveLeft() //TODO📌: create function later
    } else if (e.keyCode === 38) {
        rotate() //TODO📌: create function later
    } else if (e.keyCode === 39) {
        moveRight() //TODO📌: create function later
    } else if (e.keyCode === 40) {
        moveDown() //TODO📌: create function later
    }
}
document.addEventListener('keyup', control)
```

### These function move the tetromino
```js
// function will move the tetromino down 
function moveDown() {
    undraw()
    currentPosition += width
    draw()
    freeze()
}

//freeze function 📌
function freeze() {
    // if the current square contain at least one part of a tetromino contains the class `taken`
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
        // then all items in `current` array will add call `taken`
        current.forEach(index => squares[currentPosition + index + width].classList.add('taken'))
        
        //start a new tetromino falling
        random = nextRandom 
        nextRandom = Math.floor(Math.random() * theTetrominoes.length)
        current = theTetreominoes[random][currentRotation]
        currentPosition = 4
        draw()
        displayShape()//📌
        addScore()//📌
        gameOver()//📌
    }
}
```

### Function for keyCodes
```js
function moveLeft() {
    // removes the tetromino
    undraw()
    // create var to set end of left edge
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    // if NOT at left edge move left 1 position
    if(!isAtLeftEdge) currentPosition -= 1
    // if current position contains a taken class add to current positon 
    if(current.some(index => sqaures[currentPosition + index].classList.contains('taken'))){
        currentPosition +=1
    }
    //draw shape back to grid 
    draw()
}

function moveRight() {
    // remove the tetromino
    undraw()
    // when the tetromino is at the far right edge of the grid 
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)
    // if NOT at the right edge then move 1 position
    if(!isAtRightEdge) currentPosition += 1
    // if the current tetromino is on a square with class of contains then it will add `contains` as a class
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
        currentPosition -=1
    }
    // draw the tetromino on to the grid 
    draw()
}

//FIX ROTATION OF TETROMINOS AT THE EDGE
function isAtRight() {
    return current.some(index => (currentPosition + index + 1) % width === 0)
}

function isAtLeft() {
    return current.some(index => (currentPositon + index) % width === 0)
}

function checkRotatedPosition(P){
    P = P || currentPosition
    if ((P+1) % width < 4) {
        if(isAtRight()){
            currentPositon += 1
            checkRotatedPosition(P)
        }
    } else if ( P % width > 5) {
        if (isAtLeft()){
            currentPosition -= 1
            checkRotationPosition(P)
        }
    }
}

// rotate the tetromino 
function rotate() {
    // removes tetromino from grid
    undraw()
    // add to current rotation
    currentRotation ++
    // when you make a full rotation return to starting rotation
    if(currentRotation === current.length) { // if the current rotation gets to 4, make it go back to 0
        currentRotation = 0
    }
    //
    current = theTetrominoes[random][currentRotation]
    // check rotated postion if its near edge 
    checkRotatedPosition()
    // draw the tetromino back onto the grid
    draw()
}
```

### Display the shape in the mini-grid display
```js
function displayShape(){
    // Removes current shape on grid
    displaySquares.forEach(square => {
        sqaure.classList.remove('tetromino')
        square.style.backgroundColor = ''
    })
    // add next random shape on the display mini-grade
    upNextTetrominoes[nextRandom].forEach( index => {
        displaySquares[displayIndex + index].classList.add('tetromino')
        displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]
    })
}
```


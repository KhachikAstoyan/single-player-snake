import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeSelfIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { BOARD_SIZE, SNAKE_SPEED, isOutsideOfGrid } from './utils.js'

const GAME_BOARD = document.getElementById('board');

GAME_BOARD.style.gridTemplateColumns = `repeat(${BOARD_SIZE}, 1fr)`
GAME_BOARD.style.gridTemplateRows = `repeat(${BOARD_SIZE}, 1fr)`

let lastRenderTime = 0;
let gameOver = false;


function main(curTime) {

  if (gameOver) {
    if (confirm("You lost. Start again?")) {
      window.location = '/'
    }

    return
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (curTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = curTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateFood()
  updateSnake()
  checkForDeath()
}

function draw() {
  GAME_BOARD.innerHTML = ''
  drawSnake(GAME_BOARD)
  drawFood(GAME_BOARD)
}

function checkForDeath() {
  gameOver = isOutsideOfGrid(getSnakeHead())
    || snakeSelfIntersection()
}
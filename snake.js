import { getInputDirection } from "./input.js";

const snakeBody = [
  { x: 16, y: 16 },
]

let newSegments = 0;

function createCellElem(coordinates, gameBoard) {
  const cellElem = document.createElement('div')
  cellElem.style.gridRowStart = coordinates.y
  cellElem.style.gridColumnStart = coordinates.x
  cellElem.classList.add('snake')

  gameBoard.appendChild(cellElem)
}

export function update() {
  addCells()
  const direction = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += direction.x
  snakeBody[0].y += direction.y

  snakeSelfIntersection(direction)
}

export function draw(gameBoard) {
  snakeBody.forEach(cell => {
    createCellElem(cell, gameBoard)

  })
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function isOnSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

export function getSnakeHead() {
  return snakeBody[0]
}

export function snakeSelfIntersection(direction) {
  return isOnSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addCells() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }

  newSegments = 0
}
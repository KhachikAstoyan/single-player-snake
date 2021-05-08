import { isOnSnake, expandSnake } from './snake.js'
import { BOARD_SIZE, EXPANSION_RATE, getRandomGridPosition } from './utils.js'

let food = generateRandomFood(BOARD_SIZE)

export function update() {
  if (isOnSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = generateRandomFood(BOARD_SIZE)
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function generateRandomFood(size) {
  let foodCell;

  while (!foodCell || isOnSnake(foodCell)) {
    foodCell = getRandomGridPosition()
  }

  return foodCell
}
export const BOARD_SIZE = 31
export const EXPANSION_RATE = 1
export const SNAKE_SPEED = 10;

export function getRandomNumberFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export function getRandomGridPosition() {
  return {
    x: getRandomNumberFromInterval(1, BOARD_SIZE),
    y: getRandomNumberFromInterval(1, BOARD_SIZE)
  }
}

export function isOutsideOfGrid(coordinates) {
  return coordinates.x > BOARD_SIZE || coordinates.y > BOARD_SIZE || coordinates.x < 1 || coordinates.y < 1
}
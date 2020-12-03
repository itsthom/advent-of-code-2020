import { readInput } from './aoc-reader.js'

function collisionReducer (total, thisRow, index) {
  const shift = 3
  const width = thisRow.length

  // calculate horizontal position based on index
  const pos = (index * shift) % width
  return thisRow[pos] === '#' ? total + 1 : total
}

function solution () {
  const input = readInput('day3.txt')
  return {
    part1: input.reduce(collisionReducer, 0),
    part2: '???'
  }
}

export { collisionReducer, solution }

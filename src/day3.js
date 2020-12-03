import { readInput } from './aoc-reader.js'

function reducerProducer (rShift, dShift) {
  return (total, row, index) => {
    if (index % dShift !== 0) {
      return total
    }
    const pos = ((index / dShift) * rShift) % row.length
    return row[pos] === '#' ? total + 1 : total
  }
}

function sumCollisions (input, rShift, dShift) {
  return input.reduce(reducerProducer(rShift, dShift), 0)
}

function solution () {
  const input = readInput('day3.txt')
  const collisions = [
    sumCollisions(input, 1, 1),
    sumCollisions(input, 3, 1),
    sumCollisions(input, 5, 1),
    sumCollisions(input, 7, 1),
    sumCollisions(input, 1, 2)
  ]
  return {
    part1: collisions[1],
    part2: collisions.reduce((acc, curr) => acc * curr)
  }
}

export { sumCollisions, solution }

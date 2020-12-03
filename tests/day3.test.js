import * as d3 from '../src/day3.js'

const testInput = [
  '..##.......',
  '#...#...#..',
  '.#....#..#.',
  '..#.#...#.#',
  '.#...##..#.',
  '..#.##.....',
  '.#.#.#....#',
  '.#........#',
  '#.##...#...',
  '#...##....#',
  '.#..#...#.#'
]

describe('function: sumCollisions', () => {
  test('R1 D1', () => {
    expect(d3.sumCollisions(testInput, 1, 1)).toBe(2)
  })

  test('R3 D1', () => {
    expect(d3.sumCollisions(testInput, 3, 1)).toBe(7)
  })

  test('R5 D1', () => {
    expect(d3.sumCollisions(testInput, 5, 1)).toBe(3)
  })

  test('R7 D1', () => {
    expect(d3.sumCollisions(testInput, 7, 1)).toBe(4)
  })

  test('R1 D2', () => {
    expect(d3.sumCollisions(testInput, 1, 2)).toBe(2)
  })
})

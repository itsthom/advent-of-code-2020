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
  test('with test input', () => {
    expect(testInput.reduce(d3.collisionReducer, 0)).toBe(7)
  })
})

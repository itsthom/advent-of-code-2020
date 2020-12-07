import { readInput, solutions } from '../allTheModules.js'
const d3 = solutions.day3.mod

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

describe('function: solution', () => {
  test('with my input', () => {
    const input = readInput(solutions.day3.input)
    expect(d3.solution(input).part1).toBe(223)
    expect(d3.solution(input).part2).toBe(3517401300)
  })
})

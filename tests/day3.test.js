import * as day3 from '../src/day3.js'
import { readInput } from '../reader.js'

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
    expect(day3.sumCollisions(testInput, 1, 1)).toBe(2)
  })

  test('R3 D1', () => {
    expect(day3.sumCollisions(testInput, 3, 1)).toBe(7)
  })

  test('R5 D1', () => {
    expect(day3.sumCollisions(testInput, 5, 1)).toBe(3)
  })

  test('R7 D1', () => {
    expect(day3.sumCollisions(testInput, 7, 1)).toBe(4)
  })

  test('R1 D2', () => {
    expect(day3.sumCollisions(testInput, 1, 2)).toBe(2)
  })
})

describe('function: solution', () => {
  test('with my input', () => {
    const solution = day3.solution(readInput('day3.txt'))
    expect(solution.part1).toBe(223)
    expect(solution.part2).toBe(3517401300)
  })
})

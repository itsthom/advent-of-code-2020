import { readInput, day3 } from '../allTheModules.js'

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
    expect(day3.mod.sumCollisions(testInput, 1, 1)).toBe(2)
  })

  test('R3 D1', () => {
    expect(day3.mod.sumCollisions(testInput, 3, 1)).toBe(7)
  })

  test('R5 D1', () => {
    expect(day3.mod.sumCollisions(testInput, 5, 1)).toBe(3)
  })

  test('R7 D1', () => {
    expect(day3.mod.sumCollisions(testInput, 7, 1)).toBe(4)
  })

  test('R1 D2', () => {
    expect(day3.mod.sumCollisions(testInput, 1, 2)).toBe(2)
  })
})

describe('function: solution', () => {
  test('with my input', () => {
    const solution = day3.mod.solution(readInput(day3.input))
    expect(solution.part1).toBe(223)
    expect(solution.part2).toBe(3517401300)
  })
})

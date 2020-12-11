import * as day11 from '../src/day11.js'
import { readInput } from '../reader.js'

const testInput =
`L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL
`

describe('function: solution', () => {
  describe('with test input', () => {
    const solution = day11.solution(testInput)
    test('part1', () => {
      expect(solution.part1).toBe(37)
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })

  describe('with real input', () => {
    const solution = day11.solution(readInput('day11.txt'))
    test('part1', () => {
      expect(solution.part1).toBe(2273)
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })
})

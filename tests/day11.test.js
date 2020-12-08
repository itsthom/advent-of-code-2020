import * as day11 from '../src/day11.js'
import { readInput } from '../reader.js'

describe('function: solution', () => {
  describe('with test input', () => {
    const solution = day11.solution('')
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })

  describe('with real input', () => {
    const solution = day11.solution(readInput('day11.txt'))
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })
})

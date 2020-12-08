import * as day23 from '../src/day23.js'
import { readInput } from '../reader.js'

describe('function: solution', () => {
  describe('with test input', () => {
    const solution = day23.solution('')
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })

  describe('with real input', () => {
    const solution = day23.solution(readInput('day23.txt'))
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })
})

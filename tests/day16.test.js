import * as day16 from '../src/day16.js'
import { readInput } from '../reader.js'

describe('function: solution', () => {
  describe('with test input', () => {
    const solution = day16.solution('')
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })

  describe('with real input', () => {
    const solution = day16.solution(readInput('day16.txt'))
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })
})

import * as day17 from '../src/day17.js'
import { readInput } from '../reader.js'

describe('function: solution', () => {
  describe('with test input', () => {
    const solution = day17.solution('')
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })

  describe('with real input', () => {
    const solution = day17.solution(readInput('day17.txt'))
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })
})

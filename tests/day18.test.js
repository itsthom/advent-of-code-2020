import { day18, readInput } from '../allTheModules.js'

describe('function: solution', () => {
  describe('with test input', () => {
    const solution = day18.mod.solution('')
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })

  describe('with real input', () => {
    const solution = day18.mod.solution(readInput(day18.input))
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })
})

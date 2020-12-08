import { day21, readInput } from '../allTheModules.js'

describe('function: solution', () => {
  describe('with test input', () => {
    const solution = day21.mod.solution('')
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })

  describe('with real input', () => {
    const solution = day21.mod.solution(readInput(day21.input))
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })
})

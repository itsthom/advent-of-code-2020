import { day14, readInput } from '../allTheModules.js'

describe('function: solution', () => {
  describe('with test input', () => {
    const solution = day14.mod.solution('')
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })

  describe('with real input', () => {
    const solution = day14.mod.solution(readInput(day14.input))
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })
})

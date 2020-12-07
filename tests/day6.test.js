import { solutions, readInput } from '../allTheModules.js'
const d6 = solutions.day6.mod

const testInput = ['abc', 'a\nb\nc', 'ab\nac', 'a\na\na\na', 'b']

describe('function: countYesResponses', () => {
  test('sample input', () => {
    const result = testInput.map(d6.countYesResponses)
    expect(result[0]).toBe(3)
    expect(result[1]).toBe(3)
    expect(result[2]).toBe(3)
    expect(result[3]).toBe(1)
    expect(result[4]).toBe(1)
  })
})

describe('function: countUnanimousYesResponses', () => {
  test('sample input', () => {
    const result = testInput.map(d6.countUnanimousYesResponses)
    expect(result[0]).toBe(3)
    expect(result[1]).toBe(0)
    expect(result[2]).toBe(1)
    expect(result[3]).toBe(1)
    expect(result[4]).toBe(1)
  })
})

describe('function: solution', () => {
  test('with my input', () => {
    const input = readInput(solutions.day6.input)
    expect(d6.solution(input).part1).toBe(6742)
    expect(d6.solution(input).part2).toBe(3447)
  })
})

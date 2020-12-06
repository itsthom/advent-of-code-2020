import * as d6 from '../src/day6.js'

const input = ['abc', 'a\nb\nc', 'ab\nac', 'a\na\na\na', 'b']

describe('function: countYesResponses', () => {
  test('sample input', () => {
    const result = input.map(d6.countYesResponses)
    expect(result[0]).toBe(3)
    expect(result[1]).toBe(3)
    expect(result[2]).toBe(3)
    expect(result[3]).toBe(1)
    expect(result[4]).toBe(1)
  })
})

describe('function: countUnanimousYesResponses', () => {
  test('sample input', () => {
    const result = input.map(d6.countUnanimousYesResponses)
    expect(result[0]).toBe(3)
    expect(result[1]).toBe(0)
    expect(result[2]).toBe(1)
    expect(result[3]).toBe(1)
    expect(result[4]).toBe(1)
  })
})

describe('function: solution', () => {
  test('with my input', () => {
    expect(d6.solution().part1).toBe(6742)
    expect(d6.solution().part2).toBe(3447)
  })
})

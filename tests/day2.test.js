import * as day2 from '../src/day2.js'
import { readInput } from '../reader.js'

const testInput = [
  '1-3 a: abcde',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc'
]

describe('function: isValidPassword', () => {
  test('input 1', () => {
    expect(day2.isValidPassword(testInput[0])).toBe(true)
  })

  test('input 2', () => {
    expect(day2.isValidPassword(testInput[1])).toBe(false)
  })

  test('input 3', () => {
    expect(day2.isValidPassword(testInput[2])).toBe(true)
  })

  test(',,', () => {
    expect(day2.isValidPassword('3-5 x: xxqxm')).toBe(true)
  })
})

describe('count valid passwords', () => {
  test('test input', () => {
    expect(testInput.filter(day2.isValidPassword).length).toBe(2)
  })
})

describe('function: isValidPassword2', () => {
  test('input 1', () => {
    expect(day2.isValidPassword2(testInput[0])).toBe(true)
  })

  test('input 2', () => {
    expect(day2.isValidPassword2(testInput[1])).toBe(false)
  })

  test('input 3', () => {
    expect(day2.isValidPassword2(testInput[2])).toBe(false)
  })
})

describe('count valid passwords part 2', () => {
  test('test input', () => {
    expect(testInput.filter(day2.isValidPassword2).length).toBe(1)
  })
})

describe('function: solution', () => {
  test('with my input', () => {
    const solution = day2.solution(readInput('day2.txt'))
    expect(solution.part1).toBe(398)
    expect(solution.part2).toBe(562)
  })
})

import * as d2 from '../src/day2.js'

const testInput = [
  '1-3 a: abcde',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc'
]

describe('function: isValidPassword', () => {
  test('input 1', () => {
    expect(d2.isValidPassword(testInput[0])).toBe(true)
  })

  test('input 2', () => {
    expect(d2.isValidPassword(testInput[1])).toBe(false)
  })

  test('input 3', () => {
    expect(d2.isValidPassword(testInput[2])).toBe(true)
  })

  test(',,', () => {
    expect(d2.isValidPassword('3-5 x: xxqxm')).toBe(true)
  })
})

describe('count valid passwords', () => {
  test('test input', () => {
    expect(testInput.filter(d2.isValidPassword).length).toBe(2)
  })
})

describe('function: isValidPassword2', () => {
  test('input 1', () => {
    expect(d2.isValidPassword2(testInput[0])).toBe(true)
  })

  test('input 2', () => {
    expect(d2.isValidPassword2(testInput[1])).toBe(false)
  })

  test('input 3', () => {
    expect(d2.isValidPassword2(testInput[2])).toBe(false)
  })
})

describe('count valid passwords part 2', () => {
  test('test input', () => {
    expect(testInput.filter(d2.isValidPassword2).length).toBe(1)
  })
})
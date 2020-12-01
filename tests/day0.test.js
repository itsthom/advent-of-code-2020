import { fuelRequired } from '../src/day0.js'

describe('.fuelRequired', () => {
  test('For a mass of 12', () => {
    expect(fuelRequired(12)).toBe(2)
  })

  test('For a mass of 14', () => {
    expect(fuelRequired(14)).toBe(2)
  })

  test('For a mass of 1969', () => {
    expect(fuelRequired(1969)).toBe(654)
  })

  test('For a mass of 100756', () => {
    expect(fuelRequired(100756)).toBe(33583)
  })
})

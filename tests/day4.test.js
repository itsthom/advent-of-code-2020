import * as d4 from '../src/day4.js'

const testInput = [
  'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\
  byr:1937 iyr:2017 cid:147 hgt:183cm',
  'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\
  hcl:#cfa07d byr:1929',
  'hcl:#ae17e1 iyr:2013\
  eyr:2024\
  ecl:brn pid:760753108 byr:1931\
  hgt:179cm',
  'hcl:#cfa07d eyr:2025 pid:166559648\
  iyr:2011 ecl:brn hgt:59in'
]

describe('function: isPassportValid', () => {
  test('str1', () => {
    expect(d4.isPassportValid(testInput[0])).toBe(true)
  })

  test('str2', () => {
    expect(d4.isPassportValid(testInput[1])).toBe(false)
  })

  test('str3', () => {
    expect(d4.isPassportValid(testInput[2])).toBe(true)
  })

  test('str4', () => {
    expect(d4.isPassportValid(testInput[3])).toBe(false)
  })
})

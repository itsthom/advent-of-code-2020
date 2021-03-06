import * as day4 from '../src/day4.js'
import { readInput } from '../reader.js'

const testInput = [
  'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1937 iyr:2017 cid:147 hgt:183cm',
  'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\n hcl:#cfa07d byr:1929',
  'hcl:#ae17e1 iyr:2013\n eyr:2024\n ecl:brn pid:760753108 byr:1931\n hgt:179cm',
  'hcl:#cfa07d eyr:2025 pid:166559648\n iyr:2011 ecl:brn hgt:59in'
]

describe('function: passportHasRequiredFields', () => {
  test('str1', () => {
    const p = day4.passportStringToObject(testInput[0])
    expect(day4.passportHasRequiredFields(p)).toBe(true)
  })

  test('str2', () => {
    const p = day4.passportStringToObject(testInput[1])
    expect(day4.passportHasRequiredFields(p)).toBe(false)
  })

  test('str3', () => {
    const p = day4.passportStringToObject(testInput[2])
    expect(day4.passportHasRequiredFields(p)).toBe(true)
  })

  test('str4', () => {
    const p = day4.passportStringToObject(testInput[3])
    expect(day4.passportHasRequiredFields(p)).toBe(false)
  })
})

describe('function: passportIsValid', () => {
  const invalid = [
    'eyr:1972 cid:100\nhcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926',
    'iyr:2019\nhcl:#602927 eyr:1967 hgt:170cm\necl:grn pid:012533040 byr:1946',
    'hcl:dab227 iyr:2012\necl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277',
    'hgt:59cm ecl:zzz\neyr:2038 hcl:74454a iyr:2023\npid:3556412378 byr:2007'
  ]

  const valid = [
    'pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980\nhcl:#623a2f',
    'eyr:2029 ecl:blu cid:129 byr:1989\niyr:2014 pid:896056539 hcl:#a97842 hgt:165cm',
    'hcl:#888785\nhgt:164cm byr:2001 iyr:2015 cid:88\npid:545766238 ecl:hzl\neyr:2022',
    'iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719'
  ]

  valid.forEach((x) => {
    test(x, () => {
      const p = day4.passportStringToObject(x)
      expect(day4.passportIsValid(p)).toBe(true)
    })
  })

  invalid.forEach((x) => {
    test(x, () => {
      const p = day4.passportStringToObject(x)
      expect(day4.passportIsValid(p)).toBe(false)
    })
  })
})

describe('function: solution', () => {
  test('the answers with my input', () => {
    const sol = day4.solution(readInput('day4.txt'))
    expect(sol.part1).toBe(200)
    expect(sol.part2).toBe(116)
  })
})

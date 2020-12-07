const passportFields = [
  { name: 'byr', validator: x => x >= 1920 && x <= 2002 },
  { name: 'iyr', validator: x => x >= 2010 && x <= 2020 },
  { name: 'eyr', validator: x => x >= 2020 && x <= 2030 },
  {
    name: 'hgt',
    validator: (x) => {
      const n = parseInt(x)
      return x.endsWith('cm')
        ? n >= 150 && n <= 193
        : x.endsWith('in')
          ? n >= 59 && n <= 76
          : false
    }
  },
  { name: 'hcl', validator: x => x.match(/^#[\da-f]{6}$/) },
  { name: 'ecl', validator: x => x.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/) },
  { name: 'pid', validator: x => x.match(/^\d{9}$/) }
]

function passportHasRequiredFields (passport) {
  return passportFields.every(field => passport[field.name])
}

function passportIsValid (passport) {
  return passportFields.every(field => field.validator(passport[field.name]))
}

function passportStringToObject (str) {
  return str.split(/\s+/)
    .reduce((obj, kvp) => {
      const [key, val] = kvp.split(':')
      obj[key] = val
      return obj
    }, {})
}

function solution (input) {
  const passports = input.split('\n\n')
  const passportsWithAllRequiredFields = passports
    .map(passportStringToObject)
    .filter(passportHasRequiredFields)
  return {
    part1: passportsWithAllRequiredFields.length,
    part2: passportsWithAllRequiredFields.filter(passportIsValid).length
  }
}

export { passportHasRequiredFields, passportIsValid, passportStringToObject, solution }

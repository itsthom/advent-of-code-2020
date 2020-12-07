function findGold (ruleMap, color) {
  const rules = ruleMap.get(color)
  return color === 'shiny gold' || rules?.some(r => findGold(ruleMap, r.color))
}

function parseBagRules (str) {
  const [color, ...rules] = str.replace(' bags contain ', ', ').replace('.', '').split(', ')
  return { color: color, rules: rules.map(x => x.match(/^(?<max>\d+) (?<color>.+) bag/)?.groups).filter(x => x) }
}

function toMap (input) {
  return input.split('\n')
    .map(parseBagRules)
    .reduce((map, current) => map.set(current.color, current.rules), new Map())
}

function solution (input) {
  const ruleMap = toMap(input)
  const keys = Array.from(ruleMap.keys()).filter(x => x !== 'shiny gold')
  return {
    part1: keys.filter(x => findGold(ruleMap, x)).length,
    part2: '???'
  }
}

export { toMap, findGold, parseBagRules, solution }

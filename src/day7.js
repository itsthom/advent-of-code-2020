function findGold (ruleMap, color) {
  return color === 'shiny gold' || ruleMap.get(color).some(r => findGold(ruleMap, r.color))
}

function countBags (ruleMap, color) {
  return 1 + ruleMap.get(color).reduce((sum, rule) => sum + rule.qty * countBags(ruleMap, rule.color), 0)
}

function parseBagRules (str) {
  const [color, ...rules] = str.replace(' bags contain ', ', ').replace('.', '').split(', ')
  return {
    color: color,
    rules: rules.map(x => x.match(/^(?<qty>\d+) (?<color>.+) bag/)?.groups).filter(x => x)
  }
}

function toMap (input) {
  return input.split('\n')
    .map(parseBagRules)
    .reduce((map, current) => map.set(current.color, current.rules), new Map())
}

function solution (input) {
  const ruleMap = toMap(input)
  return {
    part1: Array.from(ruleMap.keys()).filter(x => findGold(ruleMap, x)).length - 1, // don't count the gold bag
    part2: countBags(ruleMap, 'shiny gold') - 1 // don't count the root
  }
}

export { solution }

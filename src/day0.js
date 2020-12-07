function fuelRequired (mass) {
  return Math.floor(mass / 3) - 2
}

function totalFuelRequired (input) {
  return input.split('\n').filter(x => x.length > 0)
    .map(x => fuelRequired(parseInt(x, 10)))
    .reduce((acc, current) => acc + current)
}

function solution (input) {
  return {
    part1: totalFuelRequired(input),
    part2: '???'
  }
}

export { fuelRequired, totalFuelRequired, solution }

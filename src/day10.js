function countSteps (joltages) {
  // sort & add the outlet and device joltages
  const sorted = joltages.sort((a, b) => a - b)
  sorted.unshift(0)
  sorted.push(sorted[sorted.length - 1] + 3)

  return sorted.reduce((result, current, index, arr) => {
    if (index > 0) {
      if (current - arr[index - 1] === 1) result.ones++
      if (current - arr[index - 1] === 3) result.threes++
    }
    return result
  }, { ones: 0, threes: 0 })
}

function solution (input) {
  const joltages = input.split('\n').map(Number)
  const steps = countSteps(joltages)
  return {
    part1: steps.ones * steps.threes,
    part2: '???'
  }
}

export { countSteps, solution }

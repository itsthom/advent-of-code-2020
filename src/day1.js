import { readInput } from './aoc-reader.js'

function search (sortedInput) {
  let lilIndex = 0
  for (let bigIndex = sortedInput.length - 1; bigIndex > lilIndex; bigIndex--) {
    for (lilIndex = 0; lilIndex < bigIndex; lilIndex++) {
      const sum = sortedInput[lilIndex] + sortedInput[bigIndex]
      if (sum < 2020) {
        continue
      } else if (sum > 2020) {
        break
      }
      return sortedInput[lilIndex] * sortedInput[bigIndex]
    }
  }
}

function search2 (input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let k = j + 1; k < input.length; k++) {
        const sum = input[i] + input[j] + input[k]
        if (sum === 2020) {
          return input[i] * input[j] * input[k]
        }
      }
    }
  }
}

function transformInput () {
  return readInput('day1.txt')
    .map(x => parseInt(x, 10))
    .sort((a, b) => a - b)
}

function solution () {
  const input = transformInput()
  return {
    part1: search(input),
    part2: search2(input)
  }
}

export { search, search2, solution }

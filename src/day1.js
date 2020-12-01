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
      } else {
        return sortedInput[lilIndex] * sortedInput[bigIndex]
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
  return search(transformInput())
}

export { search, solution }

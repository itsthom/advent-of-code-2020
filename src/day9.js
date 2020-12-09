function checkSum (arr, sum) {
  const pairs = arr.flatMap((x, index) => arr.slice(index + 1).map(y => [x, y]))
  return pairs.some(([a, b]) => a + b === sum)
}

function findInvalidEntry (data, preambleLength) {
  for (let i = preambleLength; i < data.length; i++) {
    if (!checkSum(data.slice(i - preambleLength, i), data[i])) {
      return data[i]
    }
  }
}

function findWeakness (data, invalidNumber) {
  for (let i = 0; i < data.length; i++) {
    for (let k = i + 1; k < data.length; k++) {
      const subArray = data.slice(i, k)
      const sum = subArray.reduce((a, b) => a + b)
      if (sum > invalidNumber) {
        break
      }
      if (sum === invalidNumber) {
        return Math.min(...subArray) + Math.max(...subArray)
      }
    }
  }
}

function solution (input, preambleLength = 25) {
  const data = input.split('\n').map(Number)
  const invalidNumber = findInvalidEntry(data, preambleLength)
  return {
    part1: invalidNumber,
    part2: findWeakness(data, invalidNumber)
  }
}

export { checkSum, findInvalidEntry, solution }

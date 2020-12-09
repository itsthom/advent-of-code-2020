function checkSum (arr, sum) {
  const pairs = arr.map((val, index) => arr.slice(index + 1).map(sub => [val, sub])).flat()
  return pairs.some(pair => pair[0] + pair[1] === sum)
}

function validateXMASData (data, preambleLength) {
  for (let i = preambleLength; i < data.length; i++) {
    const preamble = data.slice(i - preambleLength, i)
    if (!checkSum(preamble, data[i])) {
      return data[i]
    }
  }
  return true
}

function findWeakness (data, invalidNumber) {
  for (let i = 0; i < data.length; i++) {
    for (let k = i + 1; k < data.length; k++) {
      const subArray = data.slice(i, k)
      if (subArray.reduce((sum, curr) => sum + curr) === invalidNumber) {
        const sorted = subArray.sort((a, b) => a - b)
        return sorted[0] + sorted[sorted.length - 1]
      }
    }
  }
}

function solution (input, preambleLength = 25) {
  const data = input.split('\n').map(str => parseInt(str, 10))
  const invalidNumber = validateXMASData(data, preambleLength)
  return {
    part1: invalidNumber,
    part2: findWeakness(data, invalidNumber)
  }
}

export { checkSum, validateXMASData, solution }

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

function solution (input, preambleLength = 25) {
  const data = input.split('\n').map(str => parseInt(str, 10))
  return {
    part1: validateXMASData(data, preambleLength),
    part2: '???'
  }
}

export { checkSum, validateXMASData, solution }

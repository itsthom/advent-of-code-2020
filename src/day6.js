const questions = 'abcdefghijklmnopqrstuvwxyz'.split('')

function characterCounter (str) {
  return (char) => (str.match(RegExp(char, 'g')) || []).length
}

function countYesResponses (str) {
  return questions.map(characterCounter(str)).filter(x => x > 0).length
}

function countUnanimousYesResponses (str) {
  const groupSize = str.split('\n').filter(x => x).length
  return questions.map(characterCounter(str)).filter(x => x === groupSize).length
}

function solution (input) {
  const groups = input.split('\n\n')
  return {
    part1: groups.map(countYesResponses).reduce((a, b) => a + b),
    part2: groups.map(countUnanimousYesResponses).reduce((a, b) => a + b)
  }
}

export { countYesResponses, countUnanimousYesResponses, solution }

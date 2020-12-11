function countSteps (joltages) {
  return joltages.reduce((result, current, index, arr) => {
    if (index > 0) {
      if (current - arr[index - 1] === 1) result.ones++
      if (current - arr[index - 1] === 3) result.threes++
    }
    return result
  }, { ones: 0, threes: 0 })
}

// next try pruning??? once a node's paths are known do you need that node anymore? or can you mutate
// its parents in such a way that they know they're now terminal?
function countPaths (joltages) {
  // do a breadth-first traversal from the END
  const graph = toAdjacencyList(joltages)
  const end = joltages[joltages.length - 1]
  const queue = [end]

  while (queue.length > 0) {
    console.log(queue)
    const label = queue.shift()
    const node = graph.get(label)
    if (!node) continue

    removeNode(graph, label)
    console.log(graph)
    queue.push(...node.parents)
  }
  console.log(graph)
  // console.log(graph)
  // const queue = [end]
  // let iter = 0
  // while (queue.length > 0 && iter < 10000000) {
  //   iter++
  //   console.log(`iteration: ${iter}\t\tqueue depth: ${queue.length}`)
  //   const node = graph.get(queue.shift())
  //   node.paths = depthFirstFindPaths(graph, node.label)
  //   queue.push(...node.parents)
  // }
  // console.log(graph)
  // return graph
}

function removeNode (graph, label) {
  const node = graph.get(label)
  console.log(node)
  node.parents.forEach(n => {
    const parent = graph.get(n)
    if (!parent) return
    parent.paths += node.paths
    parent.children = parent.children.filter(c => c !== label)
    parent.parents = parent.parents.filter(c => c !== label)
  })
  graph.delete(label)
}

// function depthFirstFindPaths (graph, start) {
//   const node = graph.get(start)
//   if (!isNaN(node.paths)) return node.paths
//   if (node.children.length === 0) {
//     node.paths = 1
//   } else {
//     node.paths = node.children.reduce((sum, n) => sum + depthFirstFindPaths(graph, n), 0)
//   }
//   return node.paths
// }

function toAdjacencyList (joltages) {
  const end = joltages[joltages.length - 1]
  return joltages.reduce((map, current) => {
    map.set(current, {
      label: current,
      paths: current === end ? 1 : 0,
      children: joltages.filter(j => j > current && j < current + 4),
      parents: joltages.filter(j => j < current && j > current - 4),
    })
    return map
  }, new Map())
}
const input1 =
`16
10
15
5
1
11
7
19
6
12
4`

function toJoltages (input) {
  const joltages = input.split('\n').map(Number)
  // sort & add the outlet and device joltages
  joltages.sort((a, b) => a - b)
  joltages.unshift(0)
  joltages.push(joltages[joltages.length - 1] + 3)
  return joltages
}

const j = toJoltages(input1)

function solution (input) {
  const joltages = toJoltages(input)
  const { ones, threes } = countSteps(joltages)
  return {
    part1: ones * threes,
    part2: countPaths(joltages)
  }
}

export { input1, j, countSteps, countPaths, toAdjacencyList, toJoltages, solution }

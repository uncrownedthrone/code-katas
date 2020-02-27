// litres

function litres(time) {
  return Math.floor(time * 0.5)
}

// getRealFloor

function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n
}

// String ends with?

function solution(str, ending) {
  return str.endsWith(ending)
}

// Two Oldest Ages

const twoOldestAges = ages => ages.sort((a, b) => a - b).slice(-2)

// No zeroes for heros

function noBoringZeros(n) {
  let result = String(n)
  while (result.endsWith(0)) {
    result = result.substring(0, result.length - 1)
  }
  return Number(result)
}

// growth of a population

const nbYear = (startPop, growthRate, influx, targetPop) => {
  const realGrowthRate = growthRate / 100

  let currentYear = 0
  let currentPop = startPop

  while (currentPop < targetPop) {
    const realGrowthThisYear = currentPop * realGrowthRate + influx
    const growthThisYear = Math.floor(realGrowthThisYear)

    currentYear += 1
    currentPop += growthThisYear
  }
  return currentYear
}

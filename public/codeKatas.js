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

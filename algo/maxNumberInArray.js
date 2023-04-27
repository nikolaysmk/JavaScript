// найти наибольшее число в массиве
const maxNumberInArray = arr => {
  let max = 0
  let max2 = 0
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max2 = max
      max = arr[i]
    }
  }
  return {
    max: max,
    max2: max2,
  }
}

const maxNumberInArray2 = arr => {
  return Math.max(...arr)
}

const maxNumberInArray3 = arr => {
  return arr.sort()[arr.length - 1]
}

console.log(maxNumberInArray([1, 2, 4, 5, 6, 7, 8, 9, 3]))
console.log(maxNumberInArray2([1, 2, 4, 5, 6, 7, 8, 9, 3]))
console.log(maxNumberInArray3([1, 2, 4, 5, 6, 7, 8, 9, 3]))

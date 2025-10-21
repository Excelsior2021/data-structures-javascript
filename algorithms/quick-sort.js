function partition(arr, lowIndex, highIndex) {
  let pivotIndex = highIndex
  let i = lowIndex - 1

  for (let j = lowIndex; j < highIndex; ++j) {
    if (arr[j] < arr[pivotIndex]) {
      i++
      const temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
    }
  }

  const temp = arr[i + 1]
  arr[i + 1] = arr[pivotIndex]
  arr[pivotIndex] = temp

  pivotIndex = i + 1

  return pivotIndex
}

export default function quickSort(arr, lowIndex, highIndex) {
  if (lowIndex < highIndex) {
    const partitionIndex = partition(arr, lowIndex, highIndex)

    quickSort(arr, lowIndex, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, highIndex)
  }
}

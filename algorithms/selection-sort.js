export default function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i]
    for (let j = 0 + i; j < arr.length - 1; j++)
      if (arr[j] < min) {
        min = arr[j]
        const temp = arr[0 + i]
        arr[0 + i] = arr[j]
        arr[j] = temp
      }
    arr[i] = min
  }
}

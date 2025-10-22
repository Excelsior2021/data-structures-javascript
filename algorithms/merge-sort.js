export default function mergeSort(arr) {
  if (arr.length > 1) {
    const midpoint = Math.floor(arr.length / 2)
    const left = arr.slice(0, midpoint)
    const right = arr.slice(midpoint)

    mergeSort(left)
    mergeSort(right)

    let i = 0
    let j = 0
    let k = 0

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i]
        i++
      } else {
        arr[k] = right[j]
        j++
      }
      k++
    }

    while (i < left.length) {
      arr[k] = left[i]
      i++
      k++
    }

    while (j < right.length) {
      arr[k] = right[j]
      j++
      k++
    }
  }
}

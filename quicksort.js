function qSort(array, startingIndex = 0, endingIndex = array.length) {
  console.log(array);
  if (startingIndex >= endingIndex) {
    return array;
  }

  const middle = partition(array, startingIndex, endingIndex);

  array = qSort(array, startingIndex, middle);
  array = qSort(array, middle + 1, endingIndex);

  return array;
}

// Lomuto's Algorithm
function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(i, j, array);
      j++;
    }
  }
  swap(end - 1, j, array);

  return j;
}

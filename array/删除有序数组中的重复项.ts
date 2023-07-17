export function removeDuplicatesFromSortedArray(sortArray: number[]) {
  let slowFlag = 0;
  for (const iterator of sortArray) {
    if (sortArray[slowFlag] !== iterator) {
      slowFlag++;
      sortArray[slowFlag] = iterator;
    }
  }
  console.log(sortArray.slice(0, slowFlag + 1));

  return slowFlag + 1;
}

console.log(removeDuplicatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

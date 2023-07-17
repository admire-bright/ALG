function twoSum(arr: number[], target: number) {
  const map = new Map<number, number>();
  for (let index = 0; index < arr.length; index++) {
    const diff = target - arr[index];
    if (map.has(diff)) return [index, map.get(diff)];
    else map.set(arr[index], index);
  }
}
console.log(twoSum([1, 2, 3, 4, 8], 9));

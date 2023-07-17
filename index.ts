/**
 * 快速排序算法
 *
 * @param arr 待排序的数组
 * @returns 排序后的数组
 */
function quickSort(arr: number[]): number[] {
  // 如果数组长度小于等于1，直接返回数组
  if (arr.length <= 1) {
    return arr;
  }

  // 选择数组中间的元素作为基准值（这里采用中间值）
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  // 将基准值放到数组末尾
  arr[pivotIndex] = arr[arr.length - 1];
  arr[arr.length - 1] = pivot;

  // 定义左右指针，分别从数组两端开始遍历
  let leftPtr = 0;
  let rightPtr = arr.length - 1;

  // 定义左右子数组，初始值为空数组
  let leftArr: number[] = [];
  let rightArr: number[] = [];

  // 遍历数组，将元素分为左右两个子数组
  while (leftPtr <= rightPtr) {
    if (arr[leftPtr] < pivot) {
      leftArr.push(arr[leftPtr]);
      leftPtr++;
    } else if (arr[rightPtr] >= pivot) {
      rightArr.push(arr[rightPtr]);
      rightPtr--;
    } else {
      // 如果某个元素等于基准值，则将其与当前左指针交换位置，然后继续遍历
      const temp = arr[leftPtr];
      arr[leftPtr] = arr[rightPtr];
      arr[rightPtr] = temp;
      leftPtr++;
      rightPtr--;
    }
  }

  // 递归调用 quickSort 函数对左右子数组进行排序，并将排序后的结果合并
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// 示例：对数组 [3, 6, 8, 10, 1, 2, 1] 进行排序
const arr = [3, 6, 8, 10, 1, 2, 1];
const sortedArr = quickSort(arr);
console.log(sortedArr); // [1, 1, 2, 3, 6, 8, 10]
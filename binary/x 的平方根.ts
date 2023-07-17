function mySqrt(x: number): number {
  //if(x===0||x===1)return x;
  let left = 1;
  let right = x;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (x / mid < mid) right = mid - 1;
    else left = mid + 1;
  }
  return right;
}

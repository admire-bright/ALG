function isPerfectSquare(num: number): boolean {
  let left = 0;
  let right = num;
  while (left < right) {
    const mid = ((right - left) >> 1) + left;
    if (mid * mid === num) return true;
    else if (mid * mid > num) right = mid - 1;
    else left = mid + 1;
    console.log(`${left}/${right}`);
  }
  return left === right && left * right === num;
}

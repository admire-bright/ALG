function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  // if ((x && !(x % 10))) return false; 末尾为0可以直接判false
  // 方法一：
  let temp = x,
    reverseX = 0;
  while (temp) {
    reverseX = reverseX * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return reverseX === x;
}

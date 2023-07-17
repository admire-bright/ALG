function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!/[0-9a-zA-Z]/g.test(s[left])) {
      left++;
      continue;
    }
    if (!/[0-9a-zA-Z]/g.test(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() === s[right].toLowerCase()) {
      left++;
      right--;
    } else return false;
  }
  return true;
}

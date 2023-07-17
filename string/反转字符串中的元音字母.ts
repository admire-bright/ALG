function reverseVowels(s: string): string {
  let vowels = 'aeiouAEIOU';
  let l = 0,
    r = s.length - 1;
  let sArr = s.split('');
  while (l <= r) {
    if (!vowels.includes(sArr[l])) {
      l++;
      continue;
    }
    if (!vowels.includes(sArr[r])) {
      r--;
      continue;
    }
    [sArr[l++], sArr[r--]] = [sArr[r], sArr[l]];
  }
  return sArr.join('');
}

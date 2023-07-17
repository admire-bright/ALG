function longestPalindrome(s: string): string {
  let l = 0,
    r = 1;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && s[i] === s[i + 1]) {
      const [l0, r0] = helper(i, i + 1, s);
      if (r0 - l0 > r - l) {
        r = r0;
        l = l0;
      }
    }
    const [l1, r1] = helper(i, i, s);
    if (r1 - l1 > r - l) {
      r = r1;
      l = l1;
    }
  }
  console.log(l, r);
  return s.slice(l, r);
}
function helper(l: number, r: number, s: string) {
  while (l > 0 && r < s.length - 1 && s[l - 1] === s[r + 1]) {
    l--;
    r++;
  }
  return [l, r];
}

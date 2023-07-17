function longestCommonPrefix(strs: string[]): string {
  let len = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < len; j++) {
      if (strs[i].length > j && strs[0][j] === strs[i][j]) continue;
      else break;
    }
    len = Math.min(len, j);
  }
  return strs[0].substring(0, len);
}

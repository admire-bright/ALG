function wordPattern(pattern: string, s: string): boolean {
  const map1: Record<string, string> = {};
  const map2: Record<string, string> = {};
  const sArr = s.split(' ');
  if (pattern.length !== sArr.length) return false;
  for (let i = 0; i < sArr.length; i++) {
    if (Reflect.has(map1, pattern[i]) && Reflect.has(map2, sArr[i])) {
      if (map1[pattern[i]] !== sArr[i] || map2[sArr[i]] !== pattern[i])
        return false;
    } else if (Reflect.has(map1, pattern[i]) || Reflect.has(map2, sArr[i])) {
      return false;
    } else {
      map1[pattern[i]] = sArr[i];
      map2[sArr[i]] = pattern[i];
    }
  }
  return true;
}

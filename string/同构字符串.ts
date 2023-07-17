function isIsomorphic(s: string, t: string): boolean {
  const map = {};
  for (let index = 0; index < s.length; index++) {
    if (Reflect.has(map, s[index])) {
      if (Reflect.get(map, s[index]) !== t[index]) return false;
      continue;
    } else if (Object.values(map).includes(t[index])) return false;
    else map[s[index]] = t[index];
  }
  return true;
}

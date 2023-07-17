function romanToInt(s: string): number {
  const map: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && Reflect.has(map, s[i] + s[i + 1])) {
      num += map[s[i] + s[i + 1]];
      i++;
    } else num += map[s[i]];
  }
  return num;
}

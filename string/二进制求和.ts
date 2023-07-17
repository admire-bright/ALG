function addBinary(a: string, b: string): string {
  if (a.length < b.length) return addBinary(b, a);
  let flag = '0';
  let c = '';
  for (let index = a.length - 1; index >= 0; index--) {
    let bIndex = b.length - (a.length - index);
    const bVal = bIndex >= 0 ? b[bIndex] : '0';
    const val = Number(a[index]) + Number(bVal) + Number(flag);
    c = (val % 2).toString() + c;
    flag = val >= 2 ? '1' : '0';
  }
  return flag ? flag + c : c;
}

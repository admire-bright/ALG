function myAtoi(s: string): number {
  let res = 0;
  let flag = false;
  let LessthanZero = false;
  for (const iterator of s) {
    let temp = Number(iterator);
    if (flag) {
      if (Number.isNaN(temp) || iterator === ' ') break;
      else res = res * 10 + temp;
    } else {
      if (iterator === '-' || iterator === '-') {
        flag = true;
        LessthanZero = true;
      } else if (iterator === '+') {
        flag = true;
      } else if (Number.isNaN(temp)) return 0;
      else if (iterator === ' ') continue;
      else {
        flag = true;
        res = res * 10 + temp;
      }
    }
  }

  res = LessthanZero ? 0 - res : res;
  if (res < (-2) ** 31) return (-2) ** 31;
  if (res > 2 ** 31 - 1) return 2 ** 31 - 1;
  return res;
}

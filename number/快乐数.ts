function isHappy(n: number): boolean {
  let arr: number[] = [];
  while (n !== 1) {
    let temp = 0;
    while (n) {
      temp += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    if (temp === 1) return true;
    else if (arr.indexOf(temp) === -1) {
      arr.push(temp);
      n = temp;
    } else return false;
  }
  return true;
}

function addDigits(num: number): number {
  return num ? num % 9 || 9 : 0;
  return ((num - 1) % 9) + 1;
}

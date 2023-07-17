function titleToNumber(columnTitle: string): number {
  let number = 0;
  for (let index = 0; index < columnTitle.length; index++) {
    number +=
      26 ** (columnTitle.length - 1 - index) *
      (columnTitle[index].charCodeAt(0) - 64);
  }
  // for (let index = columnTitle.length - 1; index >= 0; index--) {
  //   number +=
  //     26 ** (columnTitle.length - 1 - index) *
  //     (columnTitle[index].charCodeAt(0) - 64);
  // }
  return number;
}

function validParentheses(str: string) {
  const map = new Map([
    ['}', '{'],
    [')', '('],
    [']', '['],
  ]);
  const left = [...map.values()];
  const collect: string[] = [];
  for (const iterator of str) {
    if (left.includes(iterator)) collect.push(iterator);
    else if (
      map.has(iterator) &&
      collect.length &&
      collect[collect.length - 1] === map.get(iterator)
    ) {
      collect.pop();
    } else return false;
  }
  return !collect.length;
}
console.log(validParentheses('()[]{'));

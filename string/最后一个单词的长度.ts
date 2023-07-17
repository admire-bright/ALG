function lengthOfLastWord(s: string): number {
  let len = 0;
  for (let index = s.length - 1; index >= 0; index--) {
    if (s[index] !== ' ') {
      len++;
      if (index !== 0 && s[index - 1] === ' ') break;
    }
    // if (index === 0 && s[index] !== ' ') len++;
    // else if (s[index] !== ' ' && s[index - 1] === ' ') {
    //   len++;
    //   break;
    // } else if (s[index] !== ' ') {
    //   len++;
    // } else {
    //   continue;
    // }
  }
  return len;
}

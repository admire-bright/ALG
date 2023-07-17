// function isAnagram(s: string, t: string): boolean {
//   let sArr = s.split('');
//   for (let index = 0; index < t.length; index++) {
//     let j = sArr.findIndex((item) => item === t[index]);
//     if (j === -1) return false;
//     else sArr.splice(j, 1);
//   }
//   return sArr.length === 0;
// }
function isAnagram(s: string, t: string): boolean {
  // let sArr = s.split('');
  if (s.length !== t.length) return false;
  for (let index = 0; index < t.length; index++) {
    s.replace(t[index], '');
  }
  return s.length === 0;
}

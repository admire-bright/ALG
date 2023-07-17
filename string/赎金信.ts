function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineArr = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
    const j = magazineArr.indexOf(ransomNote[i]);
    if (j !== -1) magazineArr[j] = '';
    else return false;
  }
  return true;
}

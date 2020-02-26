/*
    Find character that is most commonly used in the string
    maxChar("aaaaabbb")==="a"
    maxChar("11112 pppppl")==="p"
*/

function maxChar(str) {
  let maxCount = 0;
  let maxCharacter = str[0];
  let charMap = {};

  for (let ch of str) {
    if (charMap[ch]) {
      charMap[ch] += 1;
      if (maxCount < charMap[ch]) {
        maxCount = charMap[ch];
        maxCharacter = ch;
      }
    } else {
      charMap[ch] = 1;
    }
  }

  return maxCharacter;
}

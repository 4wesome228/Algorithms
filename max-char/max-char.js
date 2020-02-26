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
      charMap[ch]++;
    } else {
      charMap[ch] = 1;
    }
  }

  for (let key in charMap) {
    if (charMap[key] > maxCount) {
      maxCharacter = key;
      maxCount = charMap[key];
    }
  }

  return maxCharacter;
}

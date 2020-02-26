/*
Check if one string is an anagram of another
 */

function isAnagram(stringA, stringB) {
  const transformedStringA = stringA
    .replace(/[^\w]/gi, "")
    .split("")
    .sort()
    .join("")
    .toLowerCase();
  const transformedStringB = stringB
    .replace(/[^\w]/gi, "")
    .split("")
    .sort()
    .join("")
    .toLowerCase();
  return transformedStringA === transformedStringB;
}

// capitalize the first letter of each word in the string and return new capitalized string
function capitalze(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

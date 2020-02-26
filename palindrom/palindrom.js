function palindrom(str) {
  return str === str.split("").reduceRight((accu, next) => accu + next, "");
}

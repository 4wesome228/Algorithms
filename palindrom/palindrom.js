function palindrom(str) {
  return str === str.split("").reduceRight((accu, next) => accu + next, "");
}

console.log(palindrom(process.argv.slice(2)[0]));

function reverse(str) {
  return str.split("").reduceRight((prev, next) => {
    return prev + next;
  }, "");

  // return str.split("").reverse().join("")
}

console.log(reverse(process.argv.slice(2)[0]));

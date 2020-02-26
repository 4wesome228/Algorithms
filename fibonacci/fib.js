const memorize = fn => {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
};

const slowFib = n => {
  if (n < 2) return n;
  return fib(n - 2) + fib(n - 1);
};

const fib = memorize(slowFib);
/*   let start = 0;
  let prev = 1;
  let next = 1;
  for (let i = 1; i < n; i++) {
    start = next + prev;
    next = prev;
    prev = start;
  }
  console.log(next); */

console.log(fib(10));

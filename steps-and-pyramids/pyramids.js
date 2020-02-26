function pyramids(n) {
  for (let i = 1; i <= n; i++) {
    const str = " ".repeat(n - i) + "$".repeat(2 * i - 1) + " ".repeat(n - i);
    console.log(str);
  }
}

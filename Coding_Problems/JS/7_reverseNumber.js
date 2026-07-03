function reverseNumber(n) {
  let reversed = 0;
  let num = Math.abs(n);

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return n < 0 ? -reversed : reversed;
}

function totalValue(a, b) {
  if (b === 0) {
    return 1;
  } else if (b % 2 === 0) {
    const t = totalValue(a, b / 2);
    return t * t;
  } else {
    const t = totalValue(a, (b - 1) / 2);
    return a * t * t;
  }
}
console.log(totalValue(8, 2));

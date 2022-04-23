Array.prototype.sum = function () {
  return this.reduce((sum, current) => sum + current, 0);
};

function minimumSum(values, n) {
  return values
    .sort((a, b) => a - b)
    .slice(0, n)
    .sum();
}

function maximumSum(values, n) {
  return values
    .sort((a, b) => b - a)
    .slice(0, n)
    .sum();
}

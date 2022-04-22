const sanitize_null = (number) => (number === null ? 0 : number);

function min(a, b) {
  a = sanitize_null(a);
  b = sanitize_null(b);

  if (isNaN(a) || isNaN(b)) return NaN;

  return a < b ? a : b;
}

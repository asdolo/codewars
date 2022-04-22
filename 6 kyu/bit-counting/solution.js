const countBits = (n) =>
  [...parseInt(n).toString(2)].reduce((count, b) => count + Number(b), 0);

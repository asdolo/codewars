const flip = (d, a) => {
  a = a.sort((n1, n2) => (n1 < n2 ? -1 : 1));

  return d === 'R' ? a : a.reverse();
};

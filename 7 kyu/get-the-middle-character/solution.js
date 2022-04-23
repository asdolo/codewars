getMiddle = (s) => {
  const len = s.length;
  return s.substring(len / 2 - (len % 2 == 0 ? 1 : 0), len / 2 + 1);
};

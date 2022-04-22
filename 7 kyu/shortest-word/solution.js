findShort = (s) =>
  s
    .split(' ')
    .reduce((len, word) => (word.length < len ? word.length : len), s.length);

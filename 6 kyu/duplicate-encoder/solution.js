const appearances = (char, word) =>
  word
    .split('')
    .reduce(
      (appearances, x) =>
        x.toLowerCase() === char.toLowerCase() ? appearances + 1 : appearances,
      0
    );

const appearsOnlyOnce = (char, word) => appearances(char, word) === 1;

const duplicateEncode = (word) =>
  word
    .split('')
    .map((char) => (appearsOnlyOnce(char, word) ? '(' : ')'))
    .join('');

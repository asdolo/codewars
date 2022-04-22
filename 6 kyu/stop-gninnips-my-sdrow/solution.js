const reverseWord = (w) => w.split('').reverse().join('');

const spinWords = (s) => {
  return s
    .split(' ')
    .map((word) => (word.length > 4 ? reverseWord(word) : word))
    .join(' ');
};

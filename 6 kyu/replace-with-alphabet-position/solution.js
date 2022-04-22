const isLetter = (c) => {
  const charCode = c.charCodeAt(0);

  return charCode > 96 && charCode < 123;
};

const letterPositionInAlphabet = (c) => c.charCodeAt(0) - 96;

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(isLetter)
    .map(letterPositionInAlphabet)
    .join(' ');
}

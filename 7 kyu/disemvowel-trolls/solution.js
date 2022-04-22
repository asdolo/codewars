const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const isVowel = (char) => VOWELS.includes(char.toLowerCase());

const disemvowel = (str) =>
  str
    .split('')
    .filter((char) => !isVowel(char))
    .join('');

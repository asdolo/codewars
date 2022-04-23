const vowels = ['a', 'e', 'i', 'o', 'u'];

const isVowel = (character) => vowels.includes(character);

const getCount = (str) =>
  str
    .split('')
    .reduce((sum, character) => sum + (isVowel(character) ? 1 : 0), 0);

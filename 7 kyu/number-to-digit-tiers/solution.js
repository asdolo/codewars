const createArrayOfTiers = (num) =>
  num
    .toString()
    .split('')
    .reduce((acc, cur) => [...acc, [acc[acc.length - 1], cur].join('')], []);

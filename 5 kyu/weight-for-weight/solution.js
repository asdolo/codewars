const weight = (num) =>
  num.split('').reduce((weight, digit) => Number(digit) + weight, 0);

const orderWeight = (str) =>
  str
    .split(' ')
    .sort((num1, num2) => {
      const num1Weight = weight(num1);
      const num2Weight = weight(num2);

      if (num1Weight === num2Weight) return num1 > num2 ? 1 : -1;
      return num1Weight - num2Weight;
    })
    .join(' ');

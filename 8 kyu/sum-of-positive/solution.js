const positiveSum = (numbers) =>
  numbers
    .filter((number) => number > 0)
    .reduce((sum, number) => sum + number, 0);

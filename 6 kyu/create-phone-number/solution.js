const createPhoneNumber = (numbers) => {
  const areaCode = numbers.slice(0, 3);
  const telFirstHalf = numbers.slice(3, 6);
  const telSecondHalf = numbers.slice(6, 10);
  return `(${areaCode.join('')}) ${telFirstHalf.join('')}-${telSecondHalf.join(
    ''
  )}`;
};

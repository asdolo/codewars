const isZero = (e) => e === 0;
const isNotZero = (e) => !isZero(e);

const moveZeros = (arr) => [...arr.filter(isNotZero), ...arr.filter(isZero)];

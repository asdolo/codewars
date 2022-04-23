const multipleCheckerCreator = (a, m) => a % m === 0;
const isMultipleOfThree = (a) => multipleCheckerCreator(a, 3);
const isMultipleOfFive = (a) => multipleCheckerCreator(a, 5);

function solution(number) {
  const arr = [];

  for (var i = 0; i < number; i++) {
    arr.push(i);
  }

  return arr
    .filter((e) => isMultipleOfThree(e) || isMultipleOfFive(e))
    .reduce((sum, e) => e + sum, 0);
}

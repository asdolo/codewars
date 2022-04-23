const zero = (operateWithLeftOperand) =>
  operateWithLeftOperand ? operateWithLeftOperand(0) : 0;
const one = (operateWithLeftOperand) =>
  operateWithLeftOperand ? operateWithLeftOperand(1) : 1;
const two = (operateWithLeftOperand) =>
  operateWithLeftOperand ? operateWithLeftOperand(2) : 2;
const three = (operateWithLeftOperand) =>
  operateWithLeftOperand ? operateWithLeftOperand(3) : 3;
const four = (operateWithLeftOperand) =>
  operateWithLeftOperand ? operateWithLeftOperand(4) : 4;
const five = (operateWithLeftOperand) =>
  operateWithLeftOperand ? operateWithLeftOperand(5) : 5;
const six = (operateWithLeftOperand) =>
  operateWithLeftOperand ? operateWithLeftOperand(6) : 6;
const seven = (operateWithLeftOperand) =>
  operateWithLeftOperand ? operateWithLeftOperand(7) : 7;
const eight = (operateWithLeftOperand) =>
  operateWithLeftOperand ? operateWithLeftOperand(8) : 8;
const nine = (operateWithLeftOperand) =>
  operateWithLeftOperand ? operateWithLeftOperand(9) : 9;

const plus = (rightOperand) => (leftOperand) => leftOperand + rightOperand;
const minus = (rightOperand) => (leftOperand) => leftOperand - rightOperand;
const times = (rightOperand) => (leftOperand) => leftOperand * rightOperand;
const dividedBy = (rightOperand) => (leftOperand) =>
  Math.floor(leftOperand / rightOperand);

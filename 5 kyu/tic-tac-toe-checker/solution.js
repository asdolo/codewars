const valueIsEmpty = (value) => value === 0;
const valueIsX = (value) => value === 1;
const valueIsO = (value) => value === 2;

const hasEmptySpots = (board) => board.some((line) => line.some(valueIsEmpty));

const rows = (board) => board;
const cols = (board) => [
  [board[0][0], board[1][0], board[2][0]],
  [board[0][1], board[1][1], board[2][1]],
  [board[0][2], board[1][2], board[2][2]],
];

const diagonals = (board) => {
  const diag1 = [];
  const diag2 = [];

  for (i = 0; i < 3; i++) {
    diag1.push(board[i][i]);
    diag2.push(board[i][2 - i]);
  }

  return [diag1, diag2];
};

const allX = (list) => list.every(valueIsX);
const allO = (list) => list.every(valueIsO);

const winsWhen = (condition) => (board) =>
  [...rows(board), ...cols(board), ...diagonals(board)].some(condition);

const winnerIsX = winsWhen(allX);
const winnerIsO = winsWhen(allO);

function isSolved(board) {
  if (winnerIsX(board)) return 1;
  if (winnerIsO(board)) return 2;
  return hasEmptySpots(board) ? -1 : 0;
}

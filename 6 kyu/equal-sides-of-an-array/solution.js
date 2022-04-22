const sum = (arr) => arr.reduce((acum, num) => (acum += num), 0);
const findEvenIndex = (arr) =>
  arr
    .map((num, idx) => ({
      lsum: sum(arr.slice(0, idx)),
      rsum: sum(arr.slice(idx + 1, arr.length)),
    }))
    .reduce((res, { lsum, rsum }, idx) => (lsum === rsum ? idx : res), -1);

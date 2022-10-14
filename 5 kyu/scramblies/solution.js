const scramble = (str1, str2) => {
  const arr1 = Array.from(str1);
  const arr2 = Array.from(str2);

  const appearances1 = {};
  const appearances2 = {};

  for (let i = 0; i < arr1.length; i++) {
    const a = arr1[i];

    appearances1[a] = (appearances1[a] || 0) + 1;
  }

  arr2.forEach((b) => (appearances2[b] = (appearances2[b] || 0) + 1));

  return Object.keys(appearances2).reduce(
    (res, b) => res && appearances1[b] >= appearances2[b],
    true
  );
};

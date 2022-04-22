function longestConsec(strarr, k) {
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return '';
  }

  let res = '';
  for (var i = 0; i < n - k + 1; i++) {
    const currentSlice = strarr.slice(i, k + i).join('');

    res = currentSlice.length > res.length ? currentSlice : res;
  }

  return res;
}

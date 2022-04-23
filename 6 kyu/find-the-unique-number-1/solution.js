findUniq = (arr) => {
  const filtered = arr.filter((e) => e !== arr[0]);
  return filtered.length === 1 ? filtered[0] : arr[0];
};

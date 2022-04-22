const generateShape = (integer) => {
  const layers = [];

  let currentLayer = 0;
  while (currentLayer < integer) {
    const layer = Array(integer).fill('+').join('');
    layers.push(layer);

    currentLayer++;
  }

  return layers.join('\n');
};

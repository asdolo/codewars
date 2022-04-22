const number = (busStops) =>
  busStops.reduce((acum, [into, off]) => acum + into - off, 0);

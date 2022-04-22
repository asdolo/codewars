const leftSideStats = {
  w: 4,
  p: 3,
  b: 2,
  s: 1,
};

const rightSideStats = {
  m: 4,
  q: 3,
  d: 2,
  z: 1,
};

const getTeamFromFight = (fight, stats) =>
  fight.split('').filter((l) => !!stats[l]);
const getTeamPower = (letters, stats) =>
  letters.reduce((power, l) => power + stats[l], 0);

const alphabetWar = (fight) => {
  const leftSideLetters = getTeamFromFight(fight, leftSideStats);
  const rightSideLetters = getTeamFromFight(fight, rightSideStats);

  const leftSidePower = getTeamPower(leftSideLetters, leftSideStats);
  const rightSidePower = getTeamPower(rightSideLetters, rightSideStats);

  if (leftSidePower === rightSidePower) return "Let's fight again!";

  return leftSidePower > rightSidePower
    ? 'Left side wins!'
    : 'Right side wins!';
};

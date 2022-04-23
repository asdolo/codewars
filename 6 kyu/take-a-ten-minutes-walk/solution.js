class Walk {
  constructor(walkDirections) {
    this.walkDirections = walkDirections;
  }

  get duration() {
    return this.walkDirections.length;
  }

  get endsOnStartingPoint() {
    const counts = {
      n: 0,
      s: 0,
      w: 0,
      e: 0,
    };

    this.walkDirections.forEach((direction) => counts[direction]++);

    return counts['n'] === counts['s'] && counts['w'] === counts['e'];
  }

  get isValid() {
    return this.duration === 10 && this.endsOnStartingPoint;
  }
}

const isValidWalk = (walkDirections) => new Walk(walkDirections).isValid;

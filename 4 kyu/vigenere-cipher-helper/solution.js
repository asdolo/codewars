Number.prototype.mod = function (n) {
  return ((this % n) + n) % n;
};

class VigenèreCipher {
  constructor(key, abc) {
    this.key = key.split('');
    this.abc = abc.split('');
    this.positions = abc.split('').reduce(
      (reverseAbc, c, index) => ({
        ...reverseAbc,
        [c]: index,
      }),
      {}
    );
  }

  encode(str) {
    return str
      .split('')
      .map((c, idx) =>
        this.positions[c] != null
          ? this.abc[
              (
                this.positions[c] +
                this.positions[this.key[idx.mod(this.key.length)]]
              ).mod(this.abc.length)
            ]
          : c
      )
      .join('');
  }

  decode(str) {
    return str
      .split('')
      .map((c, idx) =>
        this.positions[c] != null
          ? this.abc[
              (
                this.positions[c] -
                this.positions[this.key[idx.mod(this.key.length)]]
              ).mod(this.abc.length)
            ]
          : c
      )
      .join('');
  }
}

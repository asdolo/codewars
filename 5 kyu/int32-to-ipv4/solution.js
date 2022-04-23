const int32ToIp = (int32) =>
  [24, 16, 8, 0].map((bitsToShift) => (int32 >>> bitsToShift) & 255).join('.');

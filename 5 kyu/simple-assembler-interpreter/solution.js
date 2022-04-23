let ip;
let registers;

const operators = {
  mov: (dest, src) => (registers[dest] = src),
  inc: (dest) => registers[dest]++,
  dec: (dest) => registers[dest]--,
  jnz: (z, offset) => (ip += z != 0 ? offset - 1 : 0),
};

const isConstant = (x) => !isNaN(x);

const decoders = {
  mov: (dest, src) => [dest, Number(isConstant(src) ? src : registers[src])],
  inc: (dest) => [dest],
  dec: (dest) => [dest],
  jnz: (z, offset) => [
    Number(isConstant(z) ? z : registers[z]),
    Number(isConstant(offset) ? offset : registers[offset]),
  ],
};

const fetch = (program) => program[ip];

const decode = (instruction) => {
  const [operation, ...args] = instruction.split(' ');

  return {
    operation,
    args: decoders[operation](...args),
  };
};

const execute = ({ operation, args }) => {
  operators[operation](...args);
};

const simple_assembler = (program) => {
  ip = 0;
  registers = {};

  while (ip < program.length) {
    const instruction = fetch(program);
    const decodedInstruction = decode(instruction);
    execute(decodedInstruction);
    ip++;
  }

  return registers;
};

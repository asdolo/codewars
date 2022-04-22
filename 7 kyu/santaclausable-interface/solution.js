const santaMessages = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];

const isMethod = (method) => !!method && !!method.call;

const understoodBy = (object) => (message) => isMethod(object[message]);

const isSantaClausable = (object) => santaMessages.every(understoodBy(object));

const likes = (names) => {
  let who;

  switch (names.length) {
    case 0:
      who = 'no one';
      break;
    case 1:
      who = names[0];
      break;
    case 2:
      who = `${names[0]} and ${names[1]}`;
      break;
    case 3:
      who = `${names[0]}, ${names[1]} and ${names[2]}`;
      break;
    default:
      who = `${names[0]}, ${names[1]} and ${names.length - 2} others`;
      break;
  }
  return `${who} ${names.length > 1 ? 'like' : 'likes'} this`;
};

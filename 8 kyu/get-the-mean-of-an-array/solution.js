const getAverage = (marks) =>
  Math.floor(marks.reduce((sum, mark) => mark + sum, 0) / marks.length);

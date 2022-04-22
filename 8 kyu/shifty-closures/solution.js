var greet = function (name) {
  return function () {
    return 'Hello, ' + name + '!';
  };
};

var name = 'Abe';
var greet_abe = greet(name);

name = 'Ben';
var greet_ben = greet(name);

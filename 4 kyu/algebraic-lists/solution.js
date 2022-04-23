Cons.fromArray = ([x, ...xs]) =>
  new Cons(x, xs.length > 0 ? Cons.fromArray(xs) : null);

function filter(list, predicate) {
  if (!list) return null;
  const { head, tail } = list;

  return predicate(head)
    ? new Cons(head, filter(tail, predicate))
    : filter(tail, predicate);
}

function map(list, mapper) {
  if (!list) return null;
  const { head, tail } = list;

  return new Cons(mapper(head), map(tail, mapper));
}

Cons.prototype.filter = function (predicate) {
  return filter(this, predicate);
};
Cons.prototype.map = function (mapper) {
  return map(this, mapper);
};

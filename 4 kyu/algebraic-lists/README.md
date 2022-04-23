# Algebraic Lists

### Context and Definitions

You are in charge of developing a new cool JavaScript library that provides functionality similar to that of [Underscore.js](http://underscorejs.org/).

You have started by adding a new  **list data type** to your library. You came up with a design of a data structure that represents an [algebraic data type](http://en.wikipedia.org/wiki/Algebraic_data_type) as a pair of elements:

```javascript
function Cons(head,tail){
    this.head = head;
    this.tail = tail;
}
```
```python
class Cons:
  def __init__(self, head, tail):
    self.head = head
    self.tail = tail
```
```rust
#[derive(Debug, PartialEq, Eq)]
enum Cons<T: Clone> {
  Cons(T, Box<Cons<T>>),
  Null
}

impl<T: Clone> Cons<T> {
  pub fn new(head: T, tail: Self) -> Self {
    Cons::Cons(head, Box::new(tail))
  }
}
```

You are pretty smart, because using this new data type, we can easily build a list of elements. For instance, a list of numbers:

```javascript
var numbers  = new Cons(1, new Cons(2, new Cons(3, new Cons(4, new Cons(5, null)))));
```
```python
numbers = Cons(1, Cons(2, Cons(3, Cons(4, Cons(5, None)))))
```
```rust
let numbers = Cons::new(1, Cons::new(2, Cons::new(3, Cons::new(4, Cons::new(5, Cons::Null)))));
```

In a code review with your boss, you explained him how every *cons cell* contains a "value" in its head, and in its tail it contains either another cons cell or null. We know we have reached the end of the data structure when the tail is null.

So, your boss is pretty excited about this new data structure and wants to know if you will be able to build some more  functionality around it. In a demo you did this week for the rest of your team, in order to illustrate how this works, you showed them a method to transform a list of items of your list data type into a JavaScript array:

```javascript
function toArray(list) {
	if(list){
		var more = list.tail;
		return [list.head].concat(more? toArray(more) : []);
	}
	return [];
}

Cons.prototype.toArray = function(){ return toArray(this); };
```
```python
  # added to the class implementation:
  def to_array(self):
    tail = self.tail
    new_tail = (tail.to_array() if tail is not None else [])
    return [self.head] + new_tail
```
```rust
impl<T: Clone> Cons<T> {
  pub fn to_vec(&self) -> Vec<T> {
    match self {
      &Cons::Null => vec![],
      &Cons::Cons(ref head, ref tail) => {
        let mut head = vec![head.clone()];
        head.extend(tail.to_vec());
        head
      }
    }
  }
}
```

And they were amazed when you simply did this:

```javascript
console.log(numbers.toArray());  // yields [1,2,3,4,5]
```
```python
print(numbers.to_array())  # yields [1,2,3,4,5]
```
```rust
println!("{:?}", numbers.to_vec());  // yields [1,2,3,4,5]
```

### The New Requirements

Now, the team is convinced that this is the way to go and they would like to build the library around this cool new data type, but they want you to provide a few more features for them so that they can start using this type in solving some real world problems.

You have been reading about a technique called  [applicative programming](http://quod.lib.umich.edu/s/spobooks/bbv9810.0001.001/1:15?rgn=div1;view=fulltext) which basically consists in applying a function to every element in a list.  So, you gave it some thought and you have decided to start adding features  like **filter**, **map** and **reduce**. Basically you want to provide equivalent functionality to that of JavaScript arrays and in the future even more.

So, you will now add:

 - [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2Ffilter): create a new algebraic list containing only the elements that satisfy a predicate function. 
 - [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2Ffilter) : create a new list in which every element is the result of applying a function provided as argument.
 - fromArray:  a convenient complementary method  that creates a list out of a JavaScript array.

For this Kata, the definition of `Cons` and the prototypal/class method `toArray`/`to_array`/`into_vec` are already loaded in your environment.

### Examples of Usage

```javascript
var numbers  = Cons.fromArray([1,2,3,4,5]);
numbers.filter(function(n){ return n % 2 === 0; }).toArray();  //yields [2,4]
numbers.map( function(n){ return n * n; }).toArray(); //yields [1,4,9,16,25]

var digits = Cons.fromArray(["1","2","3","4","5"]);
var integers = digits.map(function(s){return parseInt(s);})
                     .filter(function(n){ return n > 3;})
                     .toArray(); //yields [4,5]
```
```python
numbers = Cons.from_array([1,2,3,4,5])
numbers.filter(lambda x: x % 2 == 0).to_array()  # yields [2,4]
numbers.map(lambda x: x * x).to_array()  # yields [1,4,9,16,25]

digits = Cons.from_array(["1","2","3","4","5"])
integers = digits.map(int) \
                 .filter(lambda n: n > 3) \
                 .to_array()  # yields [4,5]
```
```rust
let numbers = Cons::from_iter(vec![1,2,3,4,5]);
numbers.filter(|x| x % 2 == 0).into_vec();  // yields [2,4]
numbers.map(|x| x * x).into_vec();  // yields [1,4,9,16,25]

let digits = Cons::from_iter(vec!["1","2","3","4","5"]);
let ints = digits.map(str::parse::<i32>)
                 .map(Result::unwrap)
                 .filter(|&n| n > 3)
                 .into_vec()  // yields [4,5]
```

In other words:

 - The static method `Cons.fromArray` (or `from_array`, `from_iter`) produces `Cons(1, Cons(2, Cons(3, Cons 4, Cons 5, null)))))`.
  - Above filter creates a new list: `Cons(2, Cons(4, null))`.
 -  So does above map:  `Cons(1, Cos(4, Cons(9, Cons(16, Cons(25, null)))))`.

// by value (primitives)

let a = 3;
let b;

b = a;
// "a" can be changed after the fact and "b" will remain the same.
a = 2;

console.log(a);
console.log(b);

// by reference (all objects including functions)

let c = { greeting: 'Hi' };
let d;

// d is point to the same point that c points to (no copies made)
// if c gets mutated, then d will also be mutated, because they point to the same object in memory.
d = c;
c.greeting = 'hello';

console.log(c); // greeting: 'hello'
console.log(d); // greeting: 'hello'

// by reference (even as parameters)
function changeGreeting(obj) {
	obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c); // greeting: 'Hola'
console.log(d); // greeting: 'Hola'

// Equals operator sets up new memory space (new address)
c = { greeting: 'howdy' }; // c is point to a new address in memory
console.log(c);
console.log(d);

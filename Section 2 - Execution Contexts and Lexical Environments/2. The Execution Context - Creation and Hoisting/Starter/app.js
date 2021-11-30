b(); // executed even though the function is defined later (hoisting)
console.log(a); // undefined at this point

var a = 'Hello World!';

function b() {
	console.log('Called b!');
}

// Creation Phase - execution context is created

// gloabl object - 'this' - outer environment
// setup memory space for variables and functions "HOISTING"
// all variables are initially set to undefined
// functions are sitting in memory in their entirety

// ABOVE WORKS BUT BELOW IS A BETTER METHOD -- don't rely on hoisting

var a = 'Hello World!';

function b() {
	console.log('Called b!');
}

b();
console.log(a);

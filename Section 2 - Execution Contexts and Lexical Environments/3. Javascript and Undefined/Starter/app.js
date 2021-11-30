// var a = 'hello world';
console.log(a);

if (a === undefined) {
	console.log('a is undefined!');
} else {
	console.log('a is defined!');
}

// Uncaught reference error - 'a' was never placed into memory during the creation phase
// undefined - 'a' exists in memory but does not point to a value
// never set a variable to undefined. if you set a variable to undefined you may not know whether or not the javascript engine set it to undefined or you did.

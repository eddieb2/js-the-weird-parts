var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet);

// avoiding collision

var english = {
	// greeting: {},
};
var spanish = {};

english.greet = 'Hello';
// english.greeting.greet = 'Hello';
// cannot set property 'greet' of undefined
// can be avoided by initializing the object with {greeting: {}}
spanish.greet = 'Hola';

console.log(english);
console.log(spanish);

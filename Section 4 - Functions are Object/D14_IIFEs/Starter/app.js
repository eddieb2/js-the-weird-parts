// function statement
function greet(name) {
	console.log('hello ' + name);
}

greet('eddie');

// function expression
let greetFunc = function (name) {
	console.log('hello ' + name);
};

greetFunc('joe');

// IIFE - Immediately Invoked Function Expression
let greeting = (function (name) {
	return 'Hello ' + name;
})('eddie b');

console.log(greeting);

let firstName = 'inside iffe';

(function (name) {
	console.log('hello ' + name);
})(firstName);

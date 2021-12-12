// IIFE
var firstname = 'John';

// doesn't collide with the global object
// to get access to the global obj, pass an argument
(function (global, name) {
	var greeting = 'Hello';
	global.greeting = 'Hello';
	console.log(greeting + ' ' + name);
})(window, firstname); // IIFEF

// Executed line by line
function b() {
	console.log('Called b!');
}

b();

console.log(a); // undefined

var a = 'Hello World!';

console.log(a); // hello world!

// Function Invocation and the Execution Stack //

/*
Execution Stack

Global execution context starts on the bottom of the execution stack.
function d gets added to the execution stack next and invoked
function c gets added to the execution stack and invoked
function c removed from execution stack 
function d removed from execution stack
and all remaining lines of code from the global execution context 
*/

function c() {}

function d() {
	c();
}

d();

/*
Execution Stack

Global execution context is formed and put at the bottom of the execution stack (creaded and code is executed)
function e is added to the execution stack. 
function f invoked & added to the execution stack
var d line ran
function f removed from the stack
var c line ran
remaining global context executed 
*/

function e() {
	f();
	var c;
}

function f() {
	var d;
}

e();
var d;

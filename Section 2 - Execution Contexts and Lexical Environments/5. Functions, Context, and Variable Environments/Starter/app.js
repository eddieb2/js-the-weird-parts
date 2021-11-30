function b() {
	var myVar;
	console.log(myVar);
}

function a() {
	var myVar = 2;
	console.log(myVar);
	b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

/* 

b() Execution Context myVar = undefined

a() Execution Context myVar = 2

Global Execution Context (creaded and code is executed) myVar = 1


*/

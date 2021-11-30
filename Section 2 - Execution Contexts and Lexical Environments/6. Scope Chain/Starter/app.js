function b() {
	console.log(myVar); // function b has access to the outer environment where it gets the value of myVar
	// Function b sits lexically at the global level, so it's outer lexical environment is GLOBAL
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

//////////////////////////////////////////////////////////////////

function c() {
	function d() {
		console.log(myVar); // 2 -> GRABS FROM THE OUTER REFERENCE WHICH IS FUNCTION C
	}

	var myVar = 2;
	d();
}

var myVar = 1;
c();
// d(); UNCAUGHT REFERENCE BECAUSE FUNCTION D ISN'T VISIBLE TO THE GLOBAL ENVIRONMENT

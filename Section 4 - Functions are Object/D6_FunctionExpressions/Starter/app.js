greet(); // Will run

// function statement. doesn't return a value
function greet() {
	console.log('hi');
}

greet(); // will run

// anonymousGreet(); // Cannot access before initialization.. it's undefined at this point

// function expression - not hoisted
let anonymousGreet = function () {
	console.log('hi');
};

anonymousGreet();

function log(a) {
	// console.log(a);
	a();
}

// log(3);
log(function () {
	console.log('hi');
});

function sayHiLater() {
	var greeting = 'Hi!';

	setTimeout(function () {
		console.log(greeting);
	}, 3000);
}

sayHiLater();

function tellMeWhenDone(callback) {
	var a = 1000; // some work
	var b = 2000; // some work

	callback(); // the 'callback', it runs the function i give it
}

tellMeWhenDone(function () {
	console.log('im done!');
});

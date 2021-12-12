function greet(firstname, lastname, language, ...otherParams) {
	language = language || 'en';

	if (arguments.length === 0) {
		console.log('missing parameters');
		console.log('------------------');
		return;
	}

	console.log(firstname);
	console.log(lastname);
	console.log(language);
	// console.log(arguments);
	console.log('========='); // divider
}

greet();
greet('Eddie');
greet('Eddie', 'B');
greet('Eddie', 'B', 'xxxx');

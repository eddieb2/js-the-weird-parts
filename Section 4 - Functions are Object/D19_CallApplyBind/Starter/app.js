var person = {
	firstname: 'eddie',
	lastname: 'b',
	getFullName: function () {
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	},
};

var person2 = {
	firstname: 'joe',
	lastname: 't',
	getFullName: function () {
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	},
};

var logName = function (lang1, lang2) {
	console.log('logged: ' + this.getFullName());
	// "this" now points to the "person" object
	// console.log(this);
	console.log(lang1, lang2);
}; //.bind(person);

// var logPersonName = logName.bind(person);
// logName('en');
// logName.bind(person);
logName.call(person2, 'en', 'es');
logName.apply(person, ['en', 'es']);

(function (lang1, lang2) {
	console.log(this.getFullName());
	console.log(lang1, lang2);
}.apply(person, ['en', 'es']));

// function borrowing
var person3 = {
	firstname: 'jane',
	lastname: 'doe',
};

console.log(person.getFullName.apply(person3));

// function currying
function multi(a, b) {
	return a * b;
}

var multiByTwo = multi.bind(this, 2);
console.log(multiByTwo(4));

var multiByThree = multi.bind(this, 3);
console.log(multiByThree(4));

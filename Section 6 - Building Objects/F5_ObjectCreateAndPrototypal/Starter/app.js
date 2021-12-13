var person = {
	firstname: 'default',
	lastname: 'default',
	greet: function () {
		return `hi ${this.firstname}`;
	},
};

var john = Object.create(person);
john.firstname = 'john';
john.lastname = 'doe';

console.log(john);

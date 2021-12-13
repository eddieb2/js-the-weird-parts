let person = {
	firstname: 'default',
	lastname: 'default',
	getFullName: function () {
		return this.firstname + this.lastname;
	},
};

let john = {
	firstname: 'john',
	lastname: 'doe',
};

// dont use this method (demo only)

john.__proto__ = person;
console.log(john.getFullName());

let jane = {
	firstname: 'jane',
};

jane.__proto__ = person;
console.log(jane.getFullName());

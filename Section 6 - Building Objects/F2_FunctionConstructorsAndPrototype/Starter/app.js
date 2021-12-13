function Person(firstname, lastname) {
	console.log(this);
	this.firstname = firstname;
	this.lastname = lastname;
	console.log('This function is invoked.');
}

Person.prototype.getFullName = function () {
	return `${this.firstname} ${this.lastname}`;
};

Person.prototype.getFormalFullName = function () {
	return `${this.lastname} ${this.firstname} `;
};

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

console.log(jane.getFullName());

console.log(john.getFormalFullName());

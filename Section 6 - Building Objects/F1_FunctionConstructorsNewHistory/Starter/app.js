function Person(firstname, lastname) {
	console.log(this);
	this.firstname = firstname;
	this.lastname = lastname;
	console.log('this function is invoked');
}

var john = new Person('john', 'doe');
console.log(john);

var jane = new Person('jane', 'doe');
console.log(jane);

// same as new Object();
// this is shorthand
var eddie = {
	firstName: 'eddie',
	lastName: 'blanciak',
	address: {
		street: 'some street',
		city: 'some city',
		state: 'some state',
	},
};

function greet(person) {
	console.log(`Hi ${person.firstName}`);
}

console.log(eddie);

greet(eddie);

greet({ firstName: 'Joe', lastName: 'Joe' });

eddie.address2 = {
	street: 'some other street',
};

console.log(eddie);

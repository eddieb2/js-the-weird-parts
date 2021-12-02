var person = new Object();

// bracket notation - properties
person['firstname'] = 'Eddie';
person['lastname'] = 'Blanciak';

var firstNameProperty = 'firstname';
console.log(person);
console.log(person[firstNameProperty]);

// dot notation
console.log('dot notation: ', person.firstname);

person.address = new Object();
person.address.street = 'xxx St.';
person.address.city = 'some city';
person.address.state = 'some state';

console.log(person.address);
console.log(person.address.state);
console.log(person.address.city);
console.log(person.address.street);

console.log('bracket notation: ', person['address']['street']);
console.log('bracket notation: ', person['address']['city']);
console.log('bracket notation: ', person['address']['state']);

var objectLiteral = {
	firstName: 'Eddie',
	isAProgrammer: true,
};

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse(
	'{"firstName": "Eddie", "isAProgrammer": true}'
);

console.log(jsonValue);

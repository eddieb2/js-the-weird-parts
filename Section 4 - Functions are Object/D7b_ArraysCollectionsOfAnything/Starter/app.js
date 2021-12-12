let arr = [
	1,
	false,
	{
		name: 'Eddie',
		address: 'xxx xxx xx',
	},
	function (name) {
		let greeting = 'Hi,';
		console.log(greeting + ' ' + name);
	},
	'hello',
];

console.log(arr);
arr[3](arr[2].name);

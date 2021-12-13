var people = [
	{
		firstname: 'jon',
		lastname: 'doe',
		addresses: ['xxx,xxx,xxx', 'zzz,zzz,zzz'],
	},
	{
		firstname: 'jane',
		lastname: 'doe',
		addresses: ['xxx,xxx,xxx', 'zzz,zzz,zzz'],
		greet: function () {
			return 'Hello!';
		},
	},
];

// console.log(people);

people.forEach((i, index) => {
	console.log(i.addresses);
	console.log(object);
});

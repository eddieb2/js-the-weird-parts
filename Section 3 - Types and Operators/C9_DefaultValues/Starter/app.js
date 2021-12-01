function greet(name /* = "Enter name here"*/) {
	name = name || '<Enter name here>';
	console.log('Hello ' + name); // hello undefined
}

greet('eddie');
greet();
greet(0); // hello <Enter name here>

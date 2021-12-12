function a() {
	// "this" still point to the global level
	console.log(this);
	this.newvariable = 'hello';
}

let b = function () {
	console.log(this);
};

a();

console.log(newvariable);

b();

let c = {
	name: 'The c object',
	log: function () {
		let self = this;

		self.name = 'updated c object';
		console.log(self);

		// let setname = function (newname) {
		// 	// this still points to the global object.. bug?
		// 	this.name = newname;
		// };

		// this will not set c.name to text below
		// setname('updated again! the c obj');

		// this function now sets c.name properly, instead of adding it to the global object
		let setname = function (newname) {
			self.name = newname;
		};

		setname('updated again! the c obj');
		console.log(this);
	},
};

c.log();

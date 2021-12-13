String.prototype.isLengthGreaterThan = function (limit) {
	return this.length > limit;
};

console.log('john'.isLengthGreaterThan(3));

Number.prototype.isPositive = function () {
	return this > -1;
};

let a = 0;
console.log(a.isPositive());

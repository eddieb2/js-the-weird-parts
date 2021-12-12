function mapForEach(arr, fn) {
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		newArr.push(fn(arr[i]));
	}

	return newArr;
}

var arr = [1, 2, 3];

var arr2 = mapForEach(arr, function (item) {
	return item * 2;
});

var arr3 = mapForEach(arr, function (item) {
	return item > 2;
});

console.log(arr2);
console.log(arr3);

var checkPastLimit = function (limiter, item) {
	console.log(limiter, item);
	return item > limiter;
};

var arr4 = mapForEach(arr, checkPastLimit.bind(this, 1));

console.log(arr4);

// Similfied
function limiterCheck(arr, limit) {
	return mapForEach(arr, checkPastLimit.bind(this, limit));
}

console.log(limiterCheck(arr, 1));

function checkPastLimitSimlified(limiter) {
	return function (limiter, item) {
		return item > limiter;
	}.bind(this, limiter);
}

console.log(mapForEach(arr, checkPastLimitSimlified(1)));

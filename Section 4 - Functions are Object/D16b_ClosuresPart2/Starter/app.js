function buildFunctions() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		arr.push(function () {
			console.log(i); // 3, 3, 3
		});
		console.log(i);
	}

	return arr;
}

let fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

//////

// simple solution: switch var i = 0 to let i = 0;
function buildFunctions2() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		arr.push(
			// an IIFE will create individual execution contexts
			(function (j) {
				return function () {
					console.log(j);
				};
			})(i)
		);
	}

	return arr;
}

let fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

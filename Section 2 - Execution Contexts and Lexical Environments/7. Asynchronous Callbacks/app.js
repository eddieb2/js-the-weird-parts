// long running function
function waitThreeSeconds() {
	var ms = 3000 + new Date().getTime();
	while (new Date() < ms) {}
	console.log('finished function');
}

function clickHandler() {
	console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

// The JS engine wont look at the event queue until the execution stack is empty then it will create an execution context for the event next in line.

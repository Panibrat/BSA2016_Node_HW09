define(['secondModule'], function(secondModule) {
	var jsOutput = document.getElementById('js-output');
	jsOutput.innerHTML += '23zEntry module works!';
	// call secondModule run function
	secondModule.run(jsOutput);
});

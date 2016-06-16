define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var pmodule = require('print');

    pmodule.print(messages.getHello());
	// get time
	var tStart = Date.now();
	console.log('start t:' + tStart);
	// construct the ES5 version
	var Bumb = new pmodule.Bumble();
	Bumb.outAlert();
	// construct the ES6 Class:
	var es6C = new pmodule.es6c(576.1);
	console.log("Time for Both:" + (Date.now() - tStart) );
	console.log("es6C get:"+es6C.abc);
	// show total time
	var upd1 = document.getElementById("showtotal");
	upd1.textContent = "time to create objects and console.log:" + (Date.now() - tStart);
	// Setup a real-time timer on display
	var upd = document.getElementById("upd");
	
	upd.textContent = 'main.js finished creating objects';
	fUpd = function() {
	   upd.textContent = Date.now();
	};
	setInterval(fUpd,1000);	
	
});

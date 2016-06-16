define(function () {
    return {
		print: function(msg) {
			console.log(msg);
		},
		//
		// ES5 constructor function which creates a member function 'outAlert'
		//
		Bumble: function()
		{
			this.outAlert = function()
			{
				console.log('Bumble::outAlert method t diff:'+ (Date.now() - this.tConstruct));
			}
			this.tConstruct = Date.now();
			console.log('Bumble Constructor is done t:' + this.tConstruct);
		},
		//
		// ES2015 class with getter and setter
		//
		es6c: class ES6C {
			constructor(abc)
			{
				this.abc = abc;
			}
			set abc(abcv)
			{
				this.vabc = abcv
			}
			get abc()
			{
				return this.vabc;
			}
		}
    };
});

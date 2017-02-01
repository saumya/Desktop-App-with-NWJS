//
//
// var exports = module.exports = {};
//
/*
module.exports = {
	init: function(){
		console.log('Temp : init');
	},
	testLog: function(){
		console.log('Temp : testLog')
	}
}
*/
//exports.temp = Temp;
//module.exports.temp = Temp;
//
var Temp = {
	init: function(){
		console.log('Temp : init');
		alert('Hello');
	},
	testLog: function(){
		console.log('Temp : testLog');
		alert("testLog");
	}
};
module.exports.temp = Temp;
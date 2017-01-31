// initialize your app
// and ...

//var Realm = require('realm');
//console.log(Realm);

var windowOptions = { 
	width:800, 
	height:600
};
nw.Window.open('index.html', windowOptions , function(win) {});
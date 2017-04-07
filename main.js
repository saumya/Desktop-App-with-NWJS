// initialize your app
// and ...

//var Realm = require('realm');
//console.log(Realm);

var windowOptions = { 
	width:400, 
	height:600
};
// UI Application
//nw.Window.open('index.html', windowOptions , function(win) {});

// NodeJS Integration
//nw.Window.open('home.html', windowOptions , function(win) {});

// React App
nw.Window.open('home-react.html', windowOptions , function(win) {});
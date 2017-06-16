// initialize your app
// and ...

//var Realm = require('realm');
//console.log(Realm);

nw.Screen.Init();
var screenRect = nw.Screen.screens[0].work_area;
var screenMargin = 100;//actual margin would be 100/2 on both sides

var windowOptions = { 
	width:(screenRect.width-screenMargin), 
	height:(screenRect.height-screenMargin),
	x:80,y:60
};
// UI Application
//nw.Window.open('index.html', windowOptions , function(win) {});

// NodeJS Integration
//nw.Window.open('home.html', windowOptions , function(win) {});

// React App
nw.Window.open('home-react.html', windowOptions , function(win) { 
																										//win.moveTo(50,40); 
																									});
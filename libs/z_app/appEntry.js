//
(function(){
	console.log('AppEntry');

	var $ = require('jQuery');
	
	// Create an empty context menu
	var menu = new nw.Menu();

	// Add some items with label
	menu.append(new nw.MenuItem({
	  label: 'Platform',
	  click: function(){
	    //alert('You have clicked at "Item A"');
	    // get the system platform using node.js
	    var os = require('os');
	    //document.write('You are running on ', os.platform());
	    alert(os.platform());
	  }
	}));
	menu.append(new nw.MenuItem({ 
	  label: 'Realm', 
	  click: function(){
	    var Realm = require('realm');
	    alert("Realm");
	    //document.write('You are running on ', os.platform());
	  } 
	}));
	menu.append(new nw.MenuItem({ type: 'separator' }));
	menu.append(new nw.MenuItem({ 
	  label: 'jQuery' ,
	  click:function(){
	    
	    console.log($);
	  }
	}));

	// Hooks the "contextmenu" event
	//document.body.addEventListener('contextmenu', function(ev) {
	var d = document.getElementById("logo-app"); 
	d.addEventListener('contextmenu', function(ev) {
	  // Prevent showing default context menu
	  ev.preventDefault();
	  // Popup the native context menu at place you click
	  menu.popup(ev.x, ev.y);

	  return false;
	}, false);
	//
})();

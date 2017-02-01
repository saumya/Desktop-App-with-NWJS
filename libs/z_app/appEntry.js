//
(function(){
	console.log('AppEntry');

	var myTemp = require('./libs/z_app/myModules/temp.module.js');
	
	console.log(myTemp);
	myTemp.temp.init();
	myTemp.temp.testLog();
	console.log(myTemp);


	$("#idAddScreenView").show();
	$("#idViewScreenView").hide();

	$("#idBtnAdd2").on("click",function(event){
		event.preventDefault();

		myTemp.temp.testLog();

		$("#idAddScreenView").show();
		$("#idViewScreenView").hide();

		$("#idBtnAdd2Li").addClass("active");
		$("#idBtnView2Li").removeClass("active");

		return false;
	});
	$("#idBtnView2").on("click",function(event){
		event.preventDefault();

		myTemp.temp.testLog();
		
		$("#idAddScreenView").hide();
		$("#idViewScreenView").show();

		$("#idBtnAdd2Li").removeClass("active");
		$("#idBtnView2Li").addClass("active");
		
		return false;
	});

	//var $ = require('jQuery');
	
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
	//console.log($("#idBtnAdd1"));
	$("#idBtnAdd1").on("click",function(event){
		event.preventDefault(); 
		//console.log("add");

		// id : for the table
		//var idD = new Date();
		//var idV = idD.getTime();
		var idV = Date.now();

		var dateVal = $("#idDate1").val();
		var personVal = $("#idPerson1").val();
		var forVal = $("#idFor1").val();
		var ammountVal = $("#idAmmount1").val();
		var s = idV+" : "+dateVal+" : "+personVal+" : "+ammountVal+" : "+forVal

		//var a = "<li class="list-group-item">Cras justo odio</li>"
		$("#idNowAdditions").prepend('<li class="list-group-item"> <span>'+s+'</span> <span><button type="button" class="btn btn-danger">Delete</button></span> </li>');

		return false; 
	});
	$("#idBtnClear1").on("click",function(event){
		event.preventDefault();
		$("#idNowAdditions").html("");
		return false;
	})

})();

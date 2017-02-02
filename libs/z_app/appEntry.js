//
(function(){
	console.log('AppEntry');

	// Example Module
	//var myTemp = require('./libs/z_app/myModules/temp.module.js');
	var SaveFileAsJSON = require('./libs/z_app/myModules/SaveFileAsJSON.module.js');
	//console.log(myTemp);
	//console.log(SaveFileAsJSON);

	var filledDataObj = [];


	$("#idAddScreenView").show();
	$("#idViewScreenView").hide();

	$("#idBtnAdd2").on("click",function(event){
		event.preventDefault();

		//myTemp.temp.testLog();// Test Call

		$("#idAddScreenView").show();
		$("#idViewScreenView").hide();

		$("#idBtnAdd2Li").addClass("active");
		$("#idBtnView2Li").removeClass("active");

		return false;
	});
	$("#idBtnView2").on("click",function(event){
		event.preventDefault();

		//myTemp.temp.testLog();// Test Call
		
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

		var obj = { id:idV, date:dateVal, personName:personVal, ammount:ammountVal, paidFor:forVal }
		filledDataObj.push(obj);

		var that = this;
		//var a = $('<div>Hello</div>');
		var a = $('<li class="list-group-item"> <span>'+s+'</span> <span><button id="'+idV+'" type="button" class="btn btn-danger">Delete</button></span> </li>');
		a.on("click",function(event){
			event.preventDefault();
			
			//console.log('event',event);
			//console.log('event.target',event.target);
			//console.log('event.target.id',event.target.id);

			onDeleteData(event.target.id);

			return false;
		})
		//var a = "<li class="list-group-item">Cras justo odio</li>"
		
		//$("#idNowAdditions").prepend('<li class="list-group-item"> <span>'+s+'</span> <span><button id="'+idV+'" type="button" class="btn btn-danger clsRowDelete">Delete</button></span> </li>');

		$("#idNowAdditions").prepend(a);

		console.log(filledDataObj);

		return false; 
	});
	$("#idBtnClear1").on("click",function(event){
		event.preventDefault();
		filledDataObj = [];
		$("#idNowAdditions").html("");
		return false;
	});
	$("#idBtnDone1").on("click",function(event){
		event.preventDefault();
		console.group("Save the Data", "========= WIP =========");
		//console.log(filledDataObj);

		//console.log(SaveFileAsJSON);
		//var mySettings = { "language": "en", "theme": "dark" }
		//SaveFileAsJSON.saveSettings(JSON.stringify(mySettings),function(){ console.log("SAVED!!"); })

		// JSON Dance : JSON.parse() / JSON.stringify()

		//console.log(JSON.stringify(filledDataObj));

		SaveFileAsJSON.saveSettings(JSON.stringify(filledDataObj),function(){ console.log("SAVED!!"); })



		console.groupEnd();
		return false;
	});

	var onDeleteData = function(id){
		console.group('onDeleteData:id:',id);
		console.log(filledDataObj);

		for (var i = 0; i < filledDataObj.length; i++) {
			//filledDataObj[i]
			console.log(filledDataObj[i].id,'::',Number(id));
			if(filledDataObj[i].id===Number(id)){
				console.log("======== DELETE =========");
				filledDataObj.splice(i,1);
				break;
			}
		}

		console.log(filledDataObj);
		console.groupEnd();
	}
	

	

})();

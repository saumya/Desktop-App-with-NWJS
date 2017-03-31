//
//
// ref : server shutdown : http://stackoverflow.com/questions/14626636/how-do-i-shutdown-a-node-js-https-server-immediately
// npm : http:shutdown
//
(function(){
	console.log('AppHome');

	var httpServer='NONE';

	// NodeJS integrataion
	$("#idBtnServerStart").on('click',function(){
		//alert('server');
		const http = require('http');
		const hostname = '127.0.0.1';
		const port = 3000;
		
		httpServer = http.createServer((req, res) => {
		  res.statusCode = 200;
		  res.setHeader('Content-Type', 'text/plain');
		  res.end('Hello World\n');
		});

		httpServer = require('http-shutdown')(httpServer);
		
		httpServer.listen(port, hostname, () => {
			var msg = `Server running at http://${hostname}:${port}/`
			console.log(msg);
			//alert(msg);
			$("#idInfo").html(msg);
		});
	});

	$("#idBtnServerStop").on('click',function(){
		console.log('server stop');
		//console.log('httpServer',httpServer);
		/*
		httpServer.close(function() {
			console.log('We closed!');
			process.exit();
		});
		*/
		var msg = '';

		if(httpServer==='NONE'){
			msg = 'Server has not been started!'
			$("#idInfo").html(msg);
		}else{
			httpServer.shutdown(function() {
				msg = 'Server Stopped. Everything is cleanly shutdown. If you want, start the server again.';
				console.log(msg);
				$("#idInfo").html(msg);
			});
		}
		
	});
	
})();

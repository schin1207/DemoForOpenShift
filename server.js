var http = require("http"); 
const os=require('os');   
http.createServer(function (request, response) {    
   response.writeHead(200, {'Content-Type': 'text/plain'});  
   // Send the response body as "Hello World"  
	console.log("os.cpus(): \n",os.cpus());  
	console.log("os.arch(): \n",os.arch());  
	console.log("os.networkInterfaces(): \n",os.networkInterfaces());
   response.end('Hello World\n');  
}).listen(8081);  
// Console will print the message  
console.log('Server running at http://127.0.0.1:8081/');  
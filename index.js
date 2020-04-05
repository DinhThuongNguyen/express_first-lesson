var express = require('express');
var app = express();
var port = 1992;

app.get('/user', function(request, response) {
	response.send("data from server")
});
app.listen(port,function(){
	console.log("port đã được tạo: "+ port)
});
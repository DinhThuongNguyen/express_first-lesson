var express = require('express');
var app = express();
var port = 1992;

app.set('view engine', 'pug');
app.set('views', './views')	//./views là một thư mục(nếu chưa có thì ta nên tạo một thư mục trong project)

// app.get('/user', function(request, response) {
// 	response.send("data from server .")
// });
app.get('/user', function(request, response) {
	response.render("user/index", {
		ten: [
			{id: 1, name: 'thương'},
			{id: 2, name: 'nhi'},
			{id: 3, name: 'thư'}
		]
	})
});
// app.get('/', function(require, response) {
// 	response.render('index');
// });
app.get('/', function(require, response) {
	response.render('index',{
		name : 'ANH HAI'
	});
});


app.listen(port,function(){
	console.log("port đã được tạo: "+ port)
});
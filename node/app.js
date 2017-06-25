var express = require("express");
var app = express();
var port = 3500;

app.get('/',function(req,res){
	res.send("hi i am here nodejs");
});

app.get('/books',function(req,res){
	res.send("hi i am here book");
})

app.listen(port,function(err){
	console.log("running on port "+port);
})
var express = require('express');
var logger = require('morgan');
var http = require('http');
var app = express();

app.use(logger("short"));

app.get("/hello/:who",function(req,res){
	res.end("Hello "+ req.params.who);
});
app.use(function(request,response,next){
	var minute = (new Date()).getMinutes();
	if(minute%2 === 0 ){
		next();
	}
	else{
		response.redirect("http://expressjs.com");
	}
});

app.use(function(req,res){
	res.end("You are authorized");
});

http.createServer(app).listen(3000);

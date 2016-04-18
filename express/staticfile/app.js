var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');

var app = express();

app.use(function(req,res,next){
	console.log("Request IP:" + req.url);
	console.log("Request date:" + new Date());
	next();
});

var staticPath = path.join(__dirname,"static");
app.use(express.static(staticPath));

app.use(function(req,res){
	res.status(404);
	res.send("File not found");
});


http.createServer(app).listen(3000);


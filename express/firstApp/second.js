var express = require('express');
var path = require("path");
var http = require('http');

var app = express();

app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("index",{
		message : "This is my first page"
	});
});

http.createServer(app).listen(3000);

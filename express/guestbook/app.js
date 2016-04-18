var express = require('express');
var path = require("path");
var http = require('http');
var bodyParser = require("body-parser");
var morgan = require("morgan");

var app = express();

app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","ejs");

var entries = [];
app.locals.entries = entries;

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({extended : false}));

app.get("/",function(req,res){
	res.render("index");
});

app.get("/new-entry",function(req,res){
	res.render("new-entry");
});

app.post("/new-entry",function(req,res){
	if(!req.body.title || !req.body.body){
		res.status(400).send("Entries must have title and body");
		return;
	}

	entries.push({
		title : req.body.title,
		body : req.body.body,
		published : new Date()
	});

	res.redirect("/");
});

app.use(function(req,res){
	res.status(404).render("404");
});

http.createServer(app).listen(3000);
